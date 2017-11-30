// App imports
const baasaccess = require('../data-access/Baasaccess');
const logger = require('../util/AppLogger.js');

exports.customersPIdAccountsGET = function (args, callback) {
  // Extract request arguments
   logger('debug', "/adapter/Customeraccounts args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers/'+ args.PId.value + '/owns/accounts/';
  var options = {
    method: 'GET'
  }

  // Make the call
  // baasaccess.baasCall(resource_uri, options, callback);

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      logger('error', err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};

exports.customersPIdAccountsIdGET = function (args, callback) {
  // Extract request arguments
   logger('debug', "/adapter/Customeraccounts args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers/'+ args.PId.value + '/owns/accounts/' + args.Id.value;
  var options = {
    method: 'GET'
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      logger('error', err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};

exports.customersPOST = function (args, callback) {
  // Extract request arguments
   logger('debug', "/adapter/Customeraccounts args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers';
  var options = {
    method: 'POST',
    data: JSON.stringify(args.Customer.value)
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      logger('error',err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};

exports.customersPIdAccountsIdPUT = function (args, callback) {
  // Extract request arguments
   logger('debug', "/adapter/Customeraccounts args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers/'+ args.PId.value + '/owns/accounts/' + args.Id.value;
  var options = {
    method: 'PUT',
    data: JSON.stringify(args.Account.value)
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      logger('error', err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};
