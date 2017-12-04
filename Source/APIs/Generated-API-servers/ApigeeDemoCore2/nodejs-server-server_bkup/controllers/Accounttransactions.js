'use strict';

var url = require('url');

var Accounttransactions = require('./AccounttransactionsService');

module.exports.accountsPIdTransactionsGET = function accountsPIdTransactionsGET (req, res, next) {
  Accounttransactions.accountsPIdTransactionsGET(req.swagger.params, res, next);
};

module.exports.accountsPIdTransactionsIdGET = function accountsPIdTransactionsIdGET (req, res, next) {
  Accounttransactions.accountsPIdTransactionsIdGET(req.swagger.params, res, next);
};

module.exports.accountsPIdTransactionsIdPUT = function accountsPIdTransactionsIdPUT (req, res, next) {
  Accounttransactions.accountsPIdTransactionsIdPUT(req.swagger.params, res, next);
};

module.exports.accountsPIdTransactionsPOST = function accountsPIdTransactionsPOST (req, res, next) {
  Accounttransactions.accountsPIdTransactionsPOST(req.swagger.params, res, next);
};
