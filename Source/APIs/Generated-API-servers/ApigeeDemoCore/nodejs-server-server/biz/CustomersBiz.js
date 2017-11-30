const customers = require('../adapter/Customers');

exports.customersGET = function (args, callback) {

  // Business flow/orchestration
  // Get customers and return
  customers.customersGET(args, function (err, response, data) {
    callback(err, response, data);
  });
};

exports.customersIdGET = function (args, callback) {
  // Business flow/orchestration
  // Get customers and return
  customers.customersIdGET(args, function (err, response, data) {
    callback(err, response, data);
  });
};

exports.customersPOST = function (args, callback) {
  // Business flow/orchestration
  // Get customers and return
  customers.customersPOST(args, function (err, response, data) {
    callback(err, response, data);
  });
};

exports.customersIdPUT = function (args, callback) {
  // Business flow/orchestration
  // Get customers and return
  customers.customersIdPUT(args, function (err, response, data) {
    callback(err, response, data);
  });
};
