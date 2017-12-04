const logger = require('./AppLogger');

module.exports = function (err, req, res, next) {

  logger('info', "err JSON stringify " + JSON.stringify(err));
  // logger('info', "err.error" + JSON.parse(JSON.stringify(err)).error);
  // logger('error',"******In Error Handler:" + err);
  logger('error',"******In Error Handler:" + err.stack);
  
  // var statusCode;
  // var error_message;
  
  // statusCode = err.statusCode;
  // res.statusCode = err.statusCode;
  
  var friendlyError = {
    code: err.statusCode,
    message: err.message,
    help: err.error_description
  }

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(friendlyError));
};
