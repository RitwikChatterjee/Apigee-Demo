const baasaccess = require('../data-access/Baasaccess');
const logger = require('../util/AppLogger');


exports.customersGET = function (args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Customers args received:" + JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers';
  var options = {
    method: 'GET'
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
  });
};

exports.customersIdGET = function (args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Customers args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers/'+args.Id.value;
  var options = {
    method: 'GET'
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
  });
};

exports.customersPOST = function (args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Customers args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers';
  var options = {
    method: 'POST',
    data: JSON.stringify(args.Customer.value)
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
  });
};

exports.customersIdPUT = function (args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Customers args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers/'+args.Id.value;
  var options = {
    method: 'PUT',
    data: JSON.stringify(args.Customer.value)
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
  });
};
