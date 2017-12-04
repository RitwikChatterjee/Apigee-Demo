'use strict';

// App imports
const accounttransactionsBiz = require('../biz/AccounttransactionsBiz');

// Send response to calling application
function sendResponse(error, res, data, next) {
  if (error) {
    next(error, null, res);
  } else {
    if (Object.keys(data).length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    } else {
      res.end();
    }
  }
}


exports.accountsPIdTransactionsGET = function(args, res, next) {
  /**
   * List of Transactions for particular accounts
   * List of all transactions for particular accounts
   *
   * pId String Unique Id of the parent record
   * limit Integer  (optional)
   * offset Integer  (optional)
   * returns List
   **/
  accounttransactionsBiz.accountsPIdTransactionsGET(args, function(err, data){
    sendResponse(err, res, data, next);
  });
}

exports.accountsPIdTransactionsIdGET = function(args, res, next) {
  /**
   * Get Transaction for Account
   * Gets a particular transaction for a account
   *
   * pId String Unique Id of the parent record
   * id String Unique Id of the record
   * returns Transaction
   **/
  accounttransactionsBiz.accountsPIdTransactionsIdGET(args, function(err, data){
    sendResponse(err, res, data, next);
  });
}

exports.accountsPIdTransactionsIdPUT = function(args, res, next) {
  /**
   * Update an transaction for a account
   * Updates an existing transaction for a account
   *
   * pId String Unique Id of the parent record
   * id String Unique Id of the record
   * transaction Transaction Updated account (optional)
   * returns Transaction
   **/
  accounttransactionsBiz.accountsPIdTransactionsIdPUT(args, function(err, data){
    sendResponse(err, res, data, next);
  });
}

exports.accountsPIdTransactionsPOST = function(args, res, next) {
  /**
   * Create an transaction for a account
   * Creates a new transaction for a given account
   *
   * pId String Unique Id of the parent record
   * transaction Transaction Updated account (optional)
   * returns Transaction
   **/
  accounttransactionsBiz.accountsPIdTransactionsPOST(args, function(err, data){
    sendResponse(err, res, data, next);
  });
}

