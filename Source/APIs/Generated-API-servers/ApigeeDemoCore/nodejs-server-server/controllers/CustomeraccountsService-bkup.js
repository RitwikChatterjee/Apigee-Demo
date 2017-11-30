'use strict';

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

exports.customersPIdAccountsIdGET = function(args, res, next) {
  /**
   * Get Account for Customer
   * Gets a particular account for a customer
   *
   * pId String Unique Id of the parent record
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

exports.customersPIdAccountsPOST = function(args, res, next) {
  /**
   * Create an account for a customer
   * Creates a new account for a given customer
   *
   * pId String Unique Id of the parent record
   * account Account Updated account (optional)
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

