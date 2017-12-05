'use strict';
// App imports
const twilioaccess = require('../data-access/Twilioaccess');
const logger = require('../util/AppLogger.js');

exports.sfSendTxtToken = function (args, callback) {
    // Extract request arguments
    logger('debug', "/adapter/sf args received:"+ JSON.stringify(args));
    
      // Prepare the query
      var resource_uri = '/sms/'+ args.SF_auth.value.SF_id;
      var options = {
        method: 'GET'
      }
    
      // Make the call
      twilioaccess.twilioCall(resource_uri, options, function (err, data) {
        callback(err, data);
      });
  }

  exports.sfValidateToken = function (args, callback) {
    // Extract request arguments
    logger('debug', "/adapter/sf args received:"+ JSON.stringify(args));
    
      // Prepare the query
      var resource_uri = '/sms/'+ args.SF_auth.token.value;
      var options = {
        method: 'GET'
      }
    
      // Make the call
      twilioaccess.twilioCall(resource_uri, options, function (err, data) {
        callback(err, data);
      });
  }
