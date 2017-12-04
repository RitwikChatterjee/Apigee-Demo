var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level:'info'
    }),
    new (winston.transports.File)({
      filename: './logs/app.log',
      level:'debug'
    })
  ]
});

module.exports = function (level, message) {
  logger.log(level, message);
};
