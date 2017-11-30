'use strict';

const restler = require('restler');

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
  console.log("access_options::", access_options);
  restler.post(baas_host+'/'+baas_app+'/token', access_options).on('complete', function (data, response) {
    if (data instanceof Error) {
      console.error(Error);
      this.retry(1000); //If fails, try after 1 second
    } else {
      console.log("New access token", data.access_token);
      cb(data.access_token);
    }
  });
};

// Refresh if access token expired
function refreshAccessToken() {
  console.log("refreshAccessToken called. Resetting access_options");
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
  console.log(options);

// Make the call with the given inputs
  restler.request(baas_host +'/'+ baas_app + resource_uri, options).on('complete', function (data, response) {
    console.log("response****", response.statusCode);
    console.log("data::", data);
    // Check for error
    if (data instanceof Error) {
      console.error(Error);
      callback(data, response);
    } else {
      // In some cases of error, 'data' is not an instance of Error - hence this check
      if (response.statusCode === 200) {
        // If all is well, format & forward the response
        formatBaaSOutput(data, function (formatedData) {
          console.log("Formatted data:::", formatedData);
          callback(null, response, JSON.stringify(formatedData));
        });
      } else if (response.statusCode === 401) {
          //Check if failure due to HTTP-401 Unauthorized
          refreshAccessToken();
          // TODO - Need to change the status code as this has to be managed internally
          callback(new Error("Unauthorized"), response, data);
      } else{
        // For other errors, simply send the error
        callback(new Error("Error"), response, data);
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
  // console.log(baasFormat);
}
