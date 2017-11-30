const baasaccess = require('../data-access/Baasaccess');

// Get an access_token
// var access_token = baasaccess.getAccessToken();
// console.log("access token received", baasaccess.getAccessToken());

exports.customersGET = function (args, callback) {
  // Extract request arguments
  console.log("/adapter/Customers args received:", args);

  // Prepare the query
  var resource_uri = '/customers';
  var options = {
    method: 'GET'
  }

  // Make the call
  // baasaccess.baasCall(resource_uri, options, callback);

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      console.error("Error in /adapter/Customers:", err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};

exports.customersIdGET = function (args, callback) {
  // Extract request arguments
  console.log("/adapter/Customers args received:", args);

  // Prepare the query
  var resource_uri = '/customers/'+args.Id.value;
  var options = {
    method: 'GET'
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      console.error("Error in /adapter/Customers:", err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};

exports.customersPOST = function (args, callback) {
  // Extract request arguments
  console.log("/adapter/Customers args received:", args);

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
      console.error("Error in /adapter/Customers:", err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};

exports.customersIdPUT = function (args, callback) {
  // Extract request arguments
  console.log("/adapter/Customers args received:", args);

  // Prepare the query
  var resource_uri = '/customers'+args.Id.value;
  var options = {
    method: 'PUT',
    data: JSON.stringify(args.Customer.value)
  }

  // Make the call
  baasaccess.baasCall(resource_uri, options, function (err, resp, data) {
    if (err) {
      // Check for error and perform necessary error message conversion
      console.error("Error in /adapter/Customers:", err);
      callback(err, resp, data);
    } else {
      callback(err, resp, data);
    }
  });
};
