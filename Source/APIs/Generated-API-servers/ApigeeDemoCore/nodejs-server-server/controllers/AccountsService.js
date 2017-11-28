'use strict';

exports.accountsGET = function(args, res, next) {
  /**
   * List of Accounts
   * List of all accounts
   *
   * limit Integer  (optional)
   * offset Integer  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "acc_bal" : 500.0,
  "bal_updt_ts" : "aeiou",
  "customer_id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "acc_id" : "a222g1ee-6c54-4b01-90e6-d701748f0851"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.accountsIdGET = function(args, res, next) {
  /**
   * Get a particular Account
   * Gets a particular account
   *
   * id String Unique Id of the record
   * returns Account
   **/
  var examples = {};
  examples['application/json'] = {
  "acc_bal" : 500.0,
  "bal_updt_ts" : "aeiou",
  "customer_id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "acc_id" : "a222g1ee-6c54-4b01-90e6-d701748f0851"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.accountsIdPUT = function(args, res, next) {
  /**
   * Update an account
   * Updates an existing account
   *
   * id String Unique Id of the record
   * account Account Updated account (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.accountsPOST = function(args, res, next) {
  /**
   * Create an account
   * Creates a new account. TODO - should I have this? Problem for Usergrid
   *
   * account Account Updated account (optional)
   * no response value expected for this operation
   **/
  res.end();
}

