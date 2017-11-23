'use strict';

var url = require('url');


var Transactions = require('./TransactionsService');


module.exports.dELETETransaction = function dELETETransaction (req, res, next) {
  Transactions.dELETETransaction(req.swagger.params, res, next);
};

module.exports.gETTransaction = function gETTransaction (req, res, next) {
  Transactions.gETTransaction(req.swagger.params, res, next);
};

module.exports.lISTTransactions = function lISTTransactions (req, res, next) {
  Transactions.lISTTransactions(req.swagger.params, res, next);
};

module.exports.pOSTTransaction = function pOSTTransaction (req, res, next) {
  Transactions.pOSTTransaction(req.swagger.params, res, next);
};

module.exports.pUTTransaction = function pUTTransaction (req, res, next) {
  Transactions.pUTTransaction(req.swagger.params, res, next);
};
