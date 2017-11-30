const moment = require('moment');

// App imports
const customers = require('../adapter/Customeraccounts');
const logger = require('../util/AppLogger.js');

exports.customersPIdAccountsGET = function (args, callback) {

  // Business flow/orchestration
  customers.customersPIdAccountsGET(args, function (err, response, data) {
    callback(err, response, data);
  });
};

exports.customersPIdAccountsIdGET = function (args, callback) {
  // Business flow/orchestration
  customers.customersPIdAccountsIdGET(args, function (err, response, data) {
    callback(err, response, data);
  });
};

exports.customersPOST = function (args, callback) {
  // Business flow/orchestration
  customers.customersPOST(args, function (err, response, data) {
    callback(err, response, data);
  });
};

exports.customersPIdAccountsIdPUT = function (args, callback) {
  // Business flow/orchestration
  // TODO Check what in an account can be updated. Should the update time_stamp go through?
  // Update time_stamp
  args.Account.value.bal_updt_ts = moment().format();

  customers.customersPIdAccountsIdPUT(args, function (err, response, data) {
    callback(err, response, data);
  });
};
