'use strict';

var url = require('url');

var Customeraccounts = require('./CustomeraccountsService');

module.exports.customersPIdAccountsGET = function customersPIdAccountsGET (req, res, next) {
  Customeraccounts.customersPIdAccountsGET(req.swagger.params, res, next);
};

module.exports.customersPIdAccountsIdGET = function customersPIdAccountsIdGET (req, res, next) {
  Customeraccounts.customersPIdAccountsIdGET(req.swagger.params, res, next);
};

module.exports.customersPIdAccountsIdPUT = function customersPIdAccountsIdPUT (req, res, next) {
  Customeraccounts.customersPIdAccountsIdPUT(req.swagger.params, res, next);
};

module.exports.customersPIdAccountsPOST = function customersPIdAccountsPOST (req, res, next) {
  Customeraccounts.customersPIdAccountsPOST(req.swagger.params, res, next);
};
