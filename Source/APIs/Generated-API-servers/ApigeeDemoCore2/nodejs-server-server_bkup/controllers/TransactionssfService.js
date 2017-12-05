'use strict';

// App imports
const transactionssfBiz = require('../biz/TransactionssfBiz');

// Send response to calling application
function sendResponse(error, res, data, next) {
  if (error) {
    next(error, null, res);
  } else {
    if (Object.keys(data).length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    } else {
      res.end();
    }
  }
}

exports.transactionsIdSfauthPOST = function(args, res, next) {
  /**
   * Second Factor Auth for transactions
   * Resends or confirms second factor auth
   *
   * id String Unique Id of the record
   * action String  (optional)
   * returns inline_response_200
   **/
  transactionssfBiz.transactionsIdSfauthPOST(args, function(err, data){
    sendResponse(err, res, data, next);
  });
}

