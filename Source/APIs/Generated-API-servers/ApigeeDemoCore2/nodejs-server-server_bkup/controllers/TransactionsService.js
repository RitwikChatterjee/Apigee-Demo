'use strict';

exports.transactionsGET = function(args, res, next) {
  /**
   * List of Transactions
   * List of all transactions
   *
   * limit Integer  (optional)
   * offset Integer  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "txn_id" : "t54132ee-6c54-4b01-90e6-d701748f0851",
  "txn_status_ts" : "aeiou",
  "txn_details" : "Transfer to Joe",
  "txn_ts" : "aeiou",
  "txn_type" : "Dr",
  "txn_amount" : 5.0,
  "txn_status" : "Confirmed",
  "acc_id" : "a222g1ee-6c54-4b01-90e6-d701748f0851"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.transactionsIdGET = function(args, res, next) {
  /**
   * Get a particular Transaction
   * Gets a particular transaction
   *
   * id String Unique Id of the record
   * returns Transaction
   **/
  var examples = {};
  examples['application/json'] = {
  "txn_id" : "t54132ee-6c54-4b01-90e6-d701748f0851",
  "txn_status_ts" : "aeiou",
  "txn_details" : "Transfer to Joe",
  "txn_ts" : "aeiou",
  "txn_type" : "Dr",
  "txn_amount" : 5.0,
  "txn_status" : "Confirmed",
  "acc_id" : "a222g1ee-6c54-4b01-90e6-d701748f0851"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.transactionsIdPUT = function(args, res, next) {
  /**
   * Update an transaction
   * Updates an existing transaction
   *
   * id String Unique Id of the record
   * transaction Transaction Updated account (optional)
   * returns Transaction
   **/
  var examples = {};
  examples['application/json'] = {
  "txn_id" : "t54132ee-6c54-4b01-90e6-d701748f0851",
  "txn_status_ts" : "aeiou",
  "txn_details" : "Transfer to Joe",
  "txn_ts" : "aeiou",
  "txn_type" : "Dr",
  "txn_amount" : 5.0,
  "txn_status" : "Confirmed",
  "acc_id" : "a222g1ee-6c54-4b01-90e6-d701748f0851"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.transactionsPOST = function(args, res, next) {
  /**
   * Create a transaction
   * Creates a new transaction. TODO - should I have this? Problem for Usergrid
   *
   * transaction Transaction Updated account (optional)
   * returns Transaction
   **/
  var examples = {};
  examples['application/json'] = {
  "txn_id" : "t54132ee-6c54-4b01-90e6-d701748f0851",
  "txn_status_ts" : "aeiou",
  "txn_details" : "Transfer to Joe",
  "txn_ts" : "aeiou",
  "txn_type" : "Dr",
  "txn_amount" : 5.0,
  "txn_status" : "Confirmed",
  "acc_id" : "a222g1ee-6c54-4b01-90e6-d701748f0851"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

