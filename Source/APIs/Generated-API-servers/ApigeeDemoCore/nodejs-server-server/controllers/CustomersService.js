'use strict';

// Fetch customersBiz
const customersBiz = require('../biz/CustomersBiz');

// Send response to calling application
function sendResponse(error, res, data) {
/*
//   var examples = {};
//   examples['application/json'] = [ {
//   "l_name" : "aeiou",
//   "f_name" : "aeiou",
//   "customer_id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
//   "contacts" : [ {
//     "contact_type" : "email",
//     "preference" : "Y",
//     "contact_info" : "abc@mail.com"
//   } ]
// } ];
*/
  if (error) {
    console.error("Error caught:", error);
    res.end("Sorry, error received. Try back after sometime");
  } else {
    /*
    // console.log("data in sendResponse", data);
    // // examples['application/json'] = data;
    // console.log("examples in sendResponse", examples);
    // console.log("Final response", JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    */
    // if (Object.keys(examples).length > 0) {
    if (Object.keys(data).length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
      // res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
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
   customersBiz.customersGET(args, function(err, response, data){
     res.statusCode = response.statusCode;
     sendResponse(err, res, data);
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
   customersBiz.customersIdGET(args, function(err, response, data){
     res.statusCode = response.statusCode;
     sendResponse(err, res, data);
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
   customersBiz.customersIdPUT(args, function(err, response, data){
     res.statusCode = response.statusCode;
     sendResponse(err, res, data);
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
   customersBiz.customersPOST(args, function(err, response, data){
     res.statusCode = response.statusCode;
     sendResponse(err, res, data);
   });
}
