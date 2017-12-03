const customers = require('../adapter/Customers');

exports.customersGET = function (args, callback) {

  // Business flow/orchestration
  // Get customers and return
  customers.customersGET(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersIdGET = function (args, callback) {
  // Business flow/orchestration
  // Get customers and return
  customers.customersIdGET(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersPOST = function (args, callback) {
  // Business flow/orchestration
  // Get customers and return
  customers.customersPOST(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersIdPUT = function (args, callback) {
  // Business flow/orchestration
  // Get customers and return
  customers.customersIdPUT(args, function (err, data) {
    callback(err, data);
  });
};
