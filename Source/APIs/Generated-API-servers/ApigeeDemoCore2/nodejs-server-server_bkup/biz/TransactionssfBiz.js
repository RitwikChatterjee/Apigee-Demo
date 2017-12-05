// App imports
const sfauth = require('../adapter/Sfauth');
const logger = require('../util/AppLogger.js');
const accounts = require('../adapter/Accounts');
const transactions = require('../adapter/Transactions');

    exports.transactionsIdSfauthPOST = function (args, callback) {
        // Business flow/orchestration
        /*
            1. Fetch transaction & check status
            2. If status not pending, throw error
            3. If status pending, fetch account and get sf_id
            4. If action = resend, resend token
            5. Else if action = confirm, validate token
            5a. If token validate success, update transaction
            6. Send reponse
        */
        var trans_args = {
            Id: {
                value:args.Id.value
            },
            Transaction:{
            }
        };

        // 1. Fetch transaction & check status
        fetchTransaction(trans_args).then(function (trans_string) {
            logger('debug', 'Account fetched: ' + trans_string);
            txn = JSON.parse(trans_string)[0];
            // 2. If status not pending, throw error
            if (txn.txn_status != 'Pending') {
                logger('info', "Transaction not in Pending status");
                var err = new Error("Not allowed.");
                err.statusCode = 403;
                err.error_description = "Transaction is not in pending status"
                callback(err, null);
            }
            // 4. If action = resend, resend token
            if (args.action.value == "Resend") {
                logger('debug', 'Resending token');
                var sfauth_args = {
                    SF_auth:{
                        value:{
                            SF_id: args.SF_auth.value.SF_id
                        }
                    }
                }
                sfauth.sfSendTxtToken(sfauth_args, function (err, data) {
                    if (err) {
                        logger('info', 'Sending sf token failed');
                        callback(err, null);
                    } else {
                        logger('info', 'Sending sf token success');
                    }
                });
                callback(null, "Request accepted.");
            } else if (args.action.value == "Confirm") {
                logger('debug', 'Trying to confirm token');
                
            } else {
                logger('info', "Action value unrecognized");
                var err = new Error("Bad request.");
                err.statusCode = 400;
                err.error_description = "Action value should be either Resend or Confirm"
                callback(err, null);                
            }
            
        }).catch(function (err) {
            callback(err, null);
        });


        // accounttransactions.accountsPIdTransactionsGET(args, function (err, data) {
        // callback(err, data);
        // });
    }
  

//   Promise functions

    let fetchTransaction = function (trans_args) {
        return new Promise(function (resolve, reject) {
            transactions.transactionsIdGET(trans_args, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

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

    let updateTransaction = function (trans_args) {
        return new Promise(function (resolve, reject) {
            transactions.transactionsIdPUT(trans_args, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

