const moment = require('moment');

// App imports
const customeraccounts = require('../adapter/Customeraccounts');
const logger = require('../util/AppLogger.js');

exports.customersPIdAccountsGET = function (args, callback) {

  // Business flow/orchestration
  customeraccounts.customersPIdAccountsGET(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersPIdAccountsIdGET = function (args, callback) {
  // Business flow/orchestration
  customeraccounts.customersPIdAccountsIdGET(args, function (err, data) {
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
    callback(err, null);
  }
  customeraccounts.customersPIdAccountsPOST(args, function (err, data) {
    callback(err, data);
  });
};

exports.customersPIdAccountsIdPUT = function (args, callback) {
  // Business flow/orchestration
  // TODO Check what in an account can be updated. Should the update time_stamp go through?
  // Update time_stamp
  args.Account.value.bal_updt_ts = moment().format();

  customeraccounts.customersPIdAccountsIdPUT(args, function (err, data) {
    callback(err, data);
  });
};
