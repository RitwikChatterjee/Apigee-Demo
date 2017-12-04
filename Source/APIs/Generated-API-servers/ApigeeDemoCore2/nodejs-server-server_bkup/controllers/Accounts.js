'use strict';

var url = require('url');

var Accounts = require('./AccountsService');

module.exports.accountsGET = function accountsGET (req, res, next) {
  Accounts.accountsGET(req.swagger.params, res, next);
};

module.exports.accountsIdGET = function accountsIdGET (req, res, next) {
  Accounts.accountsIdGET(req.swagger.params, res, next);
};

module.exports.accountsIdPUT = function accountsIdPUT (req, res, next) {
  Accounts.accountsIdPUT(req.swagger.params, res, next);
};

module.exports.accountsPOST = function accountsPOST (req, res, next) {
  Accounts.accountsPOST(req.swagger.params, res, next);
};
