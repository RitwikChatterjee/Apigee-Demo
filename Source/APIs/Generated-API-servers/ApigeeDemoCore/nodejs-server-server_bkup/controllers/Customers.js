'use strict';

var url = require('url');

var Customers = require('./CustomersService');

module.exports.customersGET = function customersGET (req, res, next) {
  Customers.customersGET(req.swagger.params, res, next);
};

module.exports.customersIdGET = function customersIdGET (req, res, next) {
  Customers.customersIdGET(req.swagger.params, res, next);
};

module.exports.customersIdPUT = function customersIdPUT (req, res, next) {
  Customers.customersIdPUT(req.swagger.params, res, next);
};

module.exports.customersPOST = function customersPOST (req, res, next) {
  Customers.customersPOST(req.swagger.params, res, next);
};
