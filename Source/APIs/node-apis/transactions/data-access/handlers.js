const mysqlConnect = require('./mysqlConnect');

// Get a connection from pool
var connectionPool = mysqlConnect();

// Handler functions
// This is the function that is being used currently
exports.getTransactions = function getTransactions(acc_num, start_dt, end_dt, callback) {

  connectionPool.getConnection(function(err, connection){

    if (err) {
      console.error(err);
      callback(err);
    } else {
      console.log("Got connection");
      connection.query("select * from Acc_Txn where acc_num ='" + acc_num + "'", function (err, rows, fields) {
        connection.release();
        if (err) {
          console.error(err);
          callback(err);
        } else {
          console.log("Success!!");
          callback(null, rows);
        }
      });
    }
  });
}

// Currently not being used
/*
exports.getTransactionsHandler = function getTransactionsHandler (req, res) {
  var acc_num = req.query.acc_num;
  var start_dt = req.query.start_dt;
  var end_dt = req.query.end_dt;
  connectionPool.getConnection(function(err, connection){
    if (err) {
      console.error(err);
    } else {
      console.log("Got connection");
      connection.query("select * from Acc_Txn where acc_num ='" + acc_num + "'", function (error, rows, fields) {
        connection.release();
        if (error) {
          console.error(error);
        } else {
          console.log("Success!!");
          res.json(rows);
        }
      });
    }
  });
}
*/
