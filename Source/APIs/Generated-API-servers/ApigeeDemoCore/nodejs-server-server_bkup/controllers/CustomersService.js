'use strict';

// Fetch customersBiz
const customersBiz = require('../biz/CustomersBiz');

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


exports.customersGET = function(args, res, next) {
  /**
   * List Customers
   * List of all customers
   *
   * limit Integer  (optional)
   * offset Integer  (optional)
   * returns List
   **/
   customersBiz.customersGET(args, function(err, data){
  
     sendResponse(err, res, data, next);
   });
}

exports.customersIdGET = function(args, res, next) {
  /**
   * Get Customer
   * Gets a particular customer
   *
   * id String Unique Id of the record
   * returns Customer
   **/
   customersBiz.customersIdGET(args, function(err, data){
  
     sendResponse(err, res, data, next);
   });
}

exports.customersIdPUT = function(args, res, next) {
  /**
   * Update a customer
   * Updates an existing customer
   *
   * id String Unique Id of the record
   * customer Customer Updated customer value (optional)
   * returns Customer
   **/
   customersBiz.customersIdPUT(args, function(err, data){
  
     sendResponse(err, res, data, next);
   });
}

exports.customersPOST = function(args, res, next) {
  /**
   * Create a customer
   * Creates a new customer
   *
   * customer Customer Customer to add (optional)
   * returns Customer
   **/
   customersBiz.customersPOST(args, function(err, data){
  
     sendResponse(err, res, data, next);
   });
}
