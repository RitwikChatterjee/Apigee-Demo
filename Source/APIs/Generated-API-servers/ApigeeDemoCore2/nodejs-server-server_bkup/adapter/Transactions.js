'use strict';
// App imports
const baasaccess = require('../data-access/Baasaccess');
const logger = require('../util/AppLogger.js');


exports.transactionsGET = function(args, callback) {}

exports.transactionsIdGET = function(args, callback) {
  // Extract request arguments
  logger('info',"/adapter/Transactions args received:"+ JSON.stringify(args));
  
    // Prepare the query
    var resource_uri = '/transactions/'+args.Id.value;
    var options = {
      method: 'GET'
    }
  
    // Make the call
    baasaccess.baasCall(resource_uri, options, function (err, data) {
        callback(err, data);
      });    
}
 
exports.transactionsIdPUT = function(args, callback) {
    // Extract request arguments
    logger('info',"/adapter/Transactions args received:"+ JSON.stringify(args));
    
      // Prepare the query
      var resource_uri = '/transactions/'+args.Id.value;
      var options = {
        method: 'PUT', 
        data: JSON.stringify(args.Account.value)
      }
    
      // Make the call
      baasaccess.baasCall(resource_uri, options, function (err, data) {
        callback(err, data);
      });    
  }
  
  exports.transactionsPOST = function(args, callback) {}