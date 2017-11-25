var express = require('express');
var app = express();
var mysql = require('mysql');
var port = process.env['PORT'] || 8080;

// Gcloud example code START
const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE
};

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}

var connectionPool = mysql.createPool(config);
// Gcloud example code END


app.get('/transactions', function (req, res) {
  var acc_num = req.query.acc_num;
  // var acc_num = req.params.acc_num;

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
})

app.listen(port);
