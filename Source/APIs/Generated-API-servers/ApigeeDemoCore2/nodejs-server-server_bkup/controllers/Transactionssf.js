'use strict';

var url = require('url');

var Transactionssf = require('./TransactionssfService');

module.exports.transactionsIdSfauthPOST = function transactionsIdSfauthPOST (req, res, next) {
  Transactionssf.transactionsIdSfauthPOST(req.swagger.params, res, next);
};
