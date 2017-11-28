'use strict';

exports.customersGET = function(args, res, next) {
  /**
   * List Customers
   * List of all customers
   *
   * limit Integer  (optional)
   * offset Integer  (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "l_name" : "aeiou",
  "f_name" : "aeiou",
  "customer_id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "contacts" : [ {
    "contact_type" : "email",
    "preference" : "Y",
    "contact_info" : "abc@mail.com"
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.customersIdGET = function(args, res, next) {
  /**
   * Get Customer
   * Gets a particular customer
   *
   * id String Unique Id of the record
   * returns Customer
   **/
  var examples = {};
  examples['application/json'] = {
  "l_name" : "aeiou",
  "f_name" : "aeiou",
  "customer_id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "contacts" : [ {
    "contact_type" : "email",
    "preference" : "Y",
    "contact_info" : "abc@mail.com"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.customersIdPUT = function(args, res, next) {
  /**
   * Update a customer
   * Updates an existing customer
   *
   * id String Unique Id of the record
   * customer Customer Updated customer (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.customersPOST = function(args, res, next) {
  /**
   * Create a customer
   * Creates a new customer
   *
   * customer Customer Customer to add (optional)
   * no response value expected for this operation
   **/
  res.end();
}

