'use strict';
// App imports
const baasaccess = require('../data-access/Baasaccess');
const logger = require('../util/AppLogger.js');


exports.accountsPIdTransactionsGET = function (args, callback) {
  // Extract request arguments
  logger('debug', "/adapter/Accounttransactions args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/accounts/'+ args.PId.value + '/has/transactions/';
    var options = {
      method: 'GET'
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
      callback(err, data);
    });
}


exports.accountsPIdTransactionsIdGET = function (args, callback) {
  // Extract request arguments
  logger('debug', "/adapter/Accounttransactions args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/accounts/'+ args.PId.value + '/has/transactions/' + args.Id.value;
    var options = {
      method: 'GET'
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
      callback(err, data);
    });
}

exports.accountsPIdTransactionsIdPUT = function (args, callback) {
  // Extract request arguments
  logger('debug', "/adapter/Accounttransactions args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/accounts/'+ args.PId.value + '/has/transactions/';
    var options = {
      method: 'PUT',
      data: JSON.stringify(args.Transaction.value)
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
      callback(err, data);
    });
}

exports.accountsPIdTransactionsPOST = function (args, callback) {
  // Extract request arguments
  logger('debug', "/adapter/Accounttransactions args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/accounts/'+ args.PId.value + '/has/transactions/';
    var options = {
      method: 'POST',
      data: JSON.stringify(args.Transaction.value)
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
      callback(err, data);
    });
  }

