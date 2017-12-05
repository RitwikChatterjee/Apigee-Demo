const moment = require('moment');

// App imports
const accounttransactions = require('../adapter/Accounttransactions');
const accounts = require('../adapter/Accounts');
const sfauth = require('../adapter/Sfauth');
const logger = require('../util/AppLogger.js');

exports.accountsPIdTransactionsGET = function (args, callback) {
  // Business flow/orchestration
  accounttransactions.accountsPIdTransactionsGET(args, function (err, data) {
    callback(err, data);
  });
}

exports.accountsPIdTransactionsIdGET = function (args, callback) {
  // Business flow/orchestration
  accounttransactions.accountsPIdTransactionsIdGET(args, function (err, data) {
    callback(err, data);
  });
}

exports.accountsPIdTransactionsIdPUT = function (args, callback) {
    // Business flow/orchestration
    // 1. Just pick the txn_status, add txn_status_ts and delete other fields
    var transactionUpdt = args.Transaction.value;
    if ((transactionUpdt.txn_status =="Pending") ||(transactionUpdt.txn_status =="Confirmed")||(transactionUpdt.txn_status =="Cancelled")) {

        delete transactionUpdt['uuid'];
        delete transactionUpdt['acc_id'];
        delete transactionUpdt['txn_ts'];
        delete transactionUpdt['txn_type'];
        delete transactionUpdt['txn_details'];
        delete transactionUpdt['txn_amount'];

        transactionUpdt.txn_status_ts = moment().format();
        
    } else {
        logger('info', "Business rule failed for accountsPIdTransactionsIdPUT");
        var err = new Error("Unexpected Transaction status sent.");
        err.statusCode = 400;
        callback(err, null);
    }
    // Resetting the args with the necessary info
    args.Transaction.value = transactionUpdt;

    accounttransactions.accountsPIdTransactionsIdPUT(args, function (err, data) {
        callback(err, data);
    });
}


    // TODO - Debug the business rules
    exports.accountsPIdTransactionsPOST = function (args, callback) {
        /*   // Business flow/orchestration
        1. Validate parent account id
        2. Fetch account balance
        3. Check & update account balance = account balance + txn_amount
        4. Update account with balance
        5. Set other transaction values: txn_ts, txn_status=pending, txn_status_ts
        6. Create transaction
        7. Create SFAuth 
        */        

        // 1. Check if parent account id is same as the account id  coming in the account
        if (args.PId.value !== args.Transaction.value.acc_id) {
            logger('info', "Business rule failed for accountsPIdTransactionsPOST");
            var err = new Error("Linking account id does not match");
            err.statusCode = 403;
            callback(err, null);
        }
        
        var transaction = args.Transaction.value;
        var acc_args = {
            Id: {
                value:args.PId.value
            },
            Account:{
            }
        };
        var acc;

        //   2. Fetch account balance
        fetchAccount(acc_args).then(function (acc_string) {
            logger('debug', 'Account args: ' + JSON.stringify(acc_args));
            logger('debug', 'Account fetched: ' + acc_string);
            acc = JSON.parse(acc_string)[0];
            // Step 3.
            acc.acc_bal = acc.acc_bal + transaction.txn_amount;
            if (acc.acc_bal < 0) {
                logger('info', "Not enough a/c balance");
                var err = new Error("Not allowed.");
                err.statusCode = 403;
                err.error_description = "Not enough a/c balance"
                callback(err, null);
            }        
            acc_args.Account.value = acc;
            // 4. Update account with balance
            return updateAccount(acc_args);
        }).then(function (updt_acc_str) {
            logger('debug', 'Account updated = ' + updt_acc_str);
            // 5. Set other transaction values: txn_ts, txn_status=pending, txn_status_ts
            transaction.txn_ts = moment().format();
            transaction.txn_status = "Pending";
            transaction.txn_status_ts = moment().format();
            // 6. Create transaction
            args.Transaction.value = transaction;
            return createTxn(args);
        }).then(function (txn) {
            logger('debug', 'Transaction created = ' + txn);
            // 7. Create SFAuth 
            // TODO - send for Second Factor;
            var sfauth_args = {
                SF_auth:{
                    value:{
                        SF_id: acc.SF_id
                    }
                }
            }
            sfauth.sfSendTxtToken(sfauth_args, function (err, data) {
                if (err) {
                    logger('info', 'Sending sf token failed');
                } else {
                    logger('info', 'Sending sf token success');
                }
            });
            callback(null, txn);
        }).catch(function (err) {
            // TODO - Handle rollback scenarios
            callback(err, null);
        });

    }


/* 
    exports.accountsPIdTransactionsPOST = function (args, callback) {
    // Business flow/orchestration
        // TODO add other logic

        // Check if parent account id is same as the account id  coming in the account
        if (args.PId.value !== args.Transaction.value.acc_id) {
            logger('info', "Business rule failed for accountsPIdTransactionsPOST");
            var err = new Error("Linking account id does not match");
            err.statusCode = 403;
            callback(err, null);
        }
    
    
    
        // 5. Set other transaction values: txn_ts, txn_status=pending, txn_status_ts
        args.Transaction.value.txn_ts = moment().format();
        args.Transaction.value.txn_status = "Pending";
        args.Transaction.value.txn_status_ts = moment().format();

        accounttransactions.accountsPIdTransactionsPOST(args, function (err, data) {
            callback(err, data);
        });
    }
*/

    // Promise functions
    let fetchAccount = function (acc_args) {
        return new Promise(function (resolve, reject) {
            accounts.accountsIdGET(acc_args, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    let updateAccount = function (acc_args) {
        return new Promise(function (resolve, reject) {
            accounts.accountsIdPUT(acc_args, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    let createTxn = function (txn_args) {
        return new Promise(function (resolve, reject) {
            accounttransactions.accountsPIdTransactionsPOST(txn_args, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    }
