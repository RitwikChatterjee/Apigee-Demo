'use strict';
// App imports
const baasaccess = require('../data-access/Baasaccess');
const logger = require('../util/AppLogger.js');


exports.accountsGET = function(args, callback) {}

exports.accountsIdGET = function(args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Accounts args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/accounts/'+args.Id.value;
    var options = {
      method: 'GET'
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
      callback(err, data);
    });    
}

exports.accountsIdPUT = function(args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Accounts args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/accounts/'+args.Id.value;
    var options = {
      method: 'PUT', 
      data: JSON.stringify(args.Account.value)
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
      callback(err, data);
    });    
}

exports.accountsPOST = function(args, callback) {}