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
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
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
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
  });
};

exports.customersPIdAccountsPOST = function (args, callback) {
  // Extract request arguments
   logger('debug', "/adapter/Customeraccounts args received:"+ JSON.stringify(args));

  // Prepare the query
  var resource_uri = '/customers/'+ args.PId.value + '/owns/accounts/';
  var options = {
    method: 'POST',
    data: JSON.stringify(args.Account.value)
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
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
  baasaccess.baasCall(resource_uri, options, function (err, data) {
    callback(err, data);
  });
};
