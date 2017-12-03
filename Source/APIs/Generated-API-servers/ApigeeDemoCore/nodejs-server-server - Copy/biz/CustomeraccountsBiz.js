const moment = require('moment');

// App imports
const customers = require('../adapter/Customeraccounts');
const logger = require('../util/AppLogger.js');

exports.customersPIdAccountsGET = function (args, callback) {

  // Business flow/orchestration
  customers.customersPIdAccountsGET(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersPIdAccountsIdGET = function (args, callback) {
  // Business flow/orchestration
  customers.customersPIdAccountsIdGET(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersPIdAccountsPOST = function (args, callback) {
  // Business flow/orchestration
  // Check if parent customer id is same as the customer id  coming in the account
  if (args.PId.value !== args.Account.value.customer_id) {
    logger('info', "Business rule failed for customersPIdAccountsPOST");
    var err = new Error("Linking customer id does not match");
    err.statusCode = 403;
    console.log(err);
    callback(err, null);
  }
  customers.customersPIdAccountsPOST(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersPIdAccountsIdPUT = function (args, callback) {
  // Business flow/orchestration
  // TODO Check what in an account can be updated. Should the update time_stamp go through?
  // Update time_stamp
  args.Account.value.bal_updt_ts = moment().format();

  customers.customersPIdAccountsIdPUT(args, function (err, data) {
    callback(err, data);
  });
};
