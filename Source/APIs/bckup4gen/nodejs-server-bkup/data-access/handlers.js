const mysqlConnect = require('./mysqlConnect');

// Get a connection from pool
var connectionPool = mysqlConnect();

// Handler functions
exports.customersGET = function customersGET(args, res, callback) {
  // Fetch connection pool
  connectionPool.getConnection(function(err, connection){

    if (err) {
      console.error(err);
      callback(err, res);
    } else {
      console.log("Got connection");
      connection.query("select * from Customer", function (err, rows, fields) {
        connection.release();
        if (err) {
          console.error(err);
          callback(err, res);
        } else {
          console.log("Success!!");
          callback(null, res, rows);
        }
      });
    }
  });
}

exports.customersIdGET = function customersIdGET(args, res, callback) {
  // Fetch connection pool
  connectionPool.getConnection(function(err, connection){

    if (err) {
      console.error(err);
      callback(err, res);
    } else {
      console.log("Got connection");
      connection.query("select * from Customer where Customer_Id ='" + args.Id.value +"'", function (err, rows, fields) {
        connection.release();
        if (err) {
          console.error(err);
          callback(err, res);
        } else {
          console.log("Success!!");
          callback(null, res, rows);
        }
      });
    }
  });
}
