'use strict';

// Fetch customeraccountsBiz
const customeraccountsBiz = require('../biz/CustomeraccountsBiz');

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



exports.customersPIdAccountsGET = function(args, res, next) {
  /**
   * List of Accounts for particular customers
   * List of all accounts for particular customers
   *
   * pId String Unique Id of the parent record
   * limit Integer  (optional)
   * offset Integer  (optional)
   * returns List
   **/
   customeraccountsBiz.customersPIdAccountsGET(args, function(err, data){
     sendResponse(err, res, data, next);
   });
}

exports.customersPIdAccountsIdGET = function(args, res, next) {
  /**
   * Get Account for Customer
   * Gets a particular account for a customer
   *
   * pId String Unique Id of the parent record
   * id String Unique Id of the record
   * returns Account
   **/
   customeraccountsBiz.customersPIdAccountsIdGET(args, function(err, data){

     sendResponse(err, res, data, next);
   });
}

exports.customersPIdAccountsPOST = function(args, res, next) {
  /**
   * Create an account for a customer
   * Creates a new account for a given customer
   *
   * pId String Unique Id of the parent record
   * account Account Updated account (optional)
   * returns Account
   **/
   customeraccountsBiz.customersPIdAccountsPOST(args, function(err, data){

     sendResponse(err, res, data, next);
   });
}

exports.customersPIdAccountsIdPUT = function(args, res, next) {
  /**
   * Update an account for a customer
   * Updates an existing account for a customer
   *
   * pId String Unique Id of the parent record
   * id String Unique Id of the record
   * account Account Updated account (optional)
   * returns Account
   **/
   customeraccountsBiz.customersPIdAccountsIdPUT(args, function(err, data){

     sendResponse(err, res, data, next);
   });
}
