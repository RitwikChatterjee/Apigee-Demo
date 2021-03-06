'use strict';
// Standard imports
const restler = require('restler');

// App imports
const logger = require('../util/AppLogger.js');

var baas_host = process.env.BAAS_HOST;
var baas_app = process.env.BAAS_APP;
var access_options = {
  data: {
    grant_type: 'client_credentials',
    client_id: process.env.BAAS_CLIENT_ID,
    client_secret: process.env.BAAS_CLIENT_SECRET
  }
}


// Get an access_token
var access_token;
getAccessToken(function (data_token) {
  access_token = data_token;
});

function getAccessToken(cb) {

  logger('debug',"access_options::" + JSON.stringify(access_options));

  restler.post(baas_host+'/'+baas_app+'/token', access_options).on('complete', function (result, response) {
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
      client_id: 'YXA6RaHWLNJ1Eee48g7sJBXz3w',
      client_secret: 'YXA6BqhYsXHCBT7UYLzm1I2L6WOSaQo'
    }
  }
  // Call getAccessToken again
  getAccessToken(function (data_token) {
    access_token = data_token;
  });
}


exports.baasCall = function baasCall (resource_uri, options, callback) {
  // Set access token in the request
  options.accessToken = access_token;

// Make the call with the given inputs
  restler.request(baas_host +'/'+ baas_app + resource_uri, options).on('complete', function (result, response) {
    logger('info',"response statusCode****" + response.statusCode);
    logger('debug',"result::"+ JSON.stringify(result));
    // Check for error
    if (result instanceof Error) {
      logger('error',JSON.stringify(result));
      callback(result, response);
    } else {
      // In some cases of error, 'result' is not an instance of Error - hence this check
      if (response.statusCode !== 200) {
        // If error status
        if (response.statusCode === 401) {
          //Special case of failure with 401
          refreshAccessToken();
          // TODO - Need to change the status code as this has to be managed internally
        }
          var err = new Error(result);
          err.statusCode = response.statusCode;
          callback(err, result);
      } else {
        // If all is well, format & forward the response
          formatBaaSOutput(result, function (formatedData) {
          logger('debug',"Formatted data:::", JSON.stringify(formatedData));
          callback(null, JSON.stringify(formatedData));
        });
      } 
    }
  });
};

// Formats Baas Data Output to remove additional metadata
function formatBaaSOutput(baasData, cb) {
  // Retrieve entities from the data
  var entities = JSON.parse(baasData).entities;
  entities.map(baasFormatter);
  cb(entities);
}

// Helper function to format BaaS Data output
function baasFormatter(baasFormat) {
  baasFormat=Object.assign(baasFormat,baasFormat.data);
  delete baasFormat['data'];
  delete baasFormat['type'];
  delete baasFormat['created'];
  delete baasFormat['modified'];
  delete baasFormat['metadata'];
}
