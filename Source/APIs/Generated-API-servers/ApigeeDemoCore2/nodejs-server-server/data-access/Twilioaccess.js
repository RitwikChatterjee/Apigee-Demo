'use strict';
// Standard imports
const restler = require('restler');

// App imports
const logger = require('../util/AppLogger.js');

var twilio_host = process.env.TWILIO_HOST;
var twilio_app = process.env.TWILIO_APP;
// var twilio_apikey = process.env.TWILIO_APIKEY;
 
  var access_key = {
    api_key: process.env.TWILIO_APIKEY
  }

/*
  // Get an access_token
  var access_token;
  getAccessToken(function (data_token) {
    access_token = data_token;
  });

  function getAccessToken(cb) {

    logger('debug',"access_options::" + JSON.stringify(access_options));

    restler.post(twilio_host+'/'+twilio_app+'/token', access_options).on('complete', function (result, response) {
      if (result instanceof Error) {
        logger('error', JSON.stringify(result));
        this.retry(1000); //If fails, try after 1 second
      } else {
        logger('info',"New access token" + JSON.stringify(result.access_token));
        cb(result.access_token);
      }
    });
  };

  // Refresh if access token expired
  function refreshAccessToken() {
    logger('info',"refreshAccessToken called. Resetting access_options");
    // Having to reset access_options as it has changed by this time - not sure why
    access_options = {
      data: {
        grant_type: 'client_credentials',
        client_id: process.env.BAAS_CLIENT_ID,
        client_secret: process.env.BAAS_CLIENT_SECRET
      }
    }
    // Call getAccessToken again
    getAccessToken(function (data_token) {
      access_token = data_token;
    });
  }
*/

exports.twilioCall = function twilioCall (resource_uri, options, callback) {
  // TODO Set api-key in the request
  options.query = access_key;

  // Make the call with the given inputs
  restler.request(twilio_host +'/'+ twilio_app + resource_uri, options).on('complete', function (result, response) {
    logger('info',"Twilio call statusCode****" + response.statusCode);
    logger('debug',"result::"+ JSON.stringify(result));
    // Check for error
    if (result instanceof Error) {
      logger('error',JSON.stringify(result));
      callback(result, response);
    } else {
      // In some cases of error, 'result' is not an instance of Error - hence this check
      if (response.statusCode !== 200) {
          logger('error',JSON.stringify(result));
          var err = new Error(result);
          err.statusCode = response.statusCode;
          callback(err, result);
      } else {
          // If all is well, forward the response
          callback(null, JSON.stringify(result));
      }
    }
  });
};

/* // Formats Baas Data Output to remove additional metadata
    function formatBaaSOutput(twilioData, cb) {
      // Retrieve entities from the data
      var entities = JSON.parse(twilioData).entities;
      entities.map(twilioFormatter);
      cb(entities);
    }

    // Helper function to format BaaS Data output
    function twilioFormatter(twilioFormat) {
      baasFormat=Object.assign(baasFormat,baasFormat.data);
      delete baasFormat['data'];
      delete baasFormat['type'];
      delete baasFormat['created'];
      delete baasFormat['modified'];
      delete baasFormat['metadata'];
    }
 */