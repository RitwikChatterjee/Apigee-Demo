var mysql = require('mysql');

module.exports  = function () {

// Pikcing up environment variables
  const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  };
  // Nuances to run on gae
  if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }
  // Return a connection pool
  return mysql.createPool(config);

}
