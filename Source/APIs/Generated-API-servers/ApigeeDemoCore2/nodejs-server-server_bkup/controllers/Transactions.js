'use strict';

var url = require('url');

var Transactions = require('./TransactionsService');

module.exports.transactionsGET = function transactionsGET (req, res, next) {
  Transactions.transactionsGET(req.swagger.params, res, next);
};

module.exports.transactionsIdGET = function transactionsIdGET (req, res, next) {
  Transactions.transactionsIdGET(req.swagger.params, res, next);
};

module.exports.transactionsIdPUT = function transactionsIdPUT (req, res, next) {
  Transactions.transactionsIdPUT(req.swagger.params, res, next);
};

module.exports.transactionsPOST = function transactionsPOST (req, res, next) {
  Transactions.transactionsPOST(req.swagger.params, res, next);
};
