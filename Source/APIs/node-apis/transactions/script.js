var express = require('express');
var app = express();
var port = process.env['PORT'] || 8080;

// Fetch data access handlers
const handlers = require('./data-access/handlers');

app.get('/transactions', function (req, res) {
  // Fetching request data
  var acc_num = req.query.acc_num;
  var start_dt = req.query.start_dt;
  var end_dt = req.query.end_dt;

  // Send request to data access handlers
  handlers.getTransactions(acc_num, start_dt, end_dt, function (error, rows) {
    if (error) {
      console.error("Error caught:", error);
      res.send("Sorry, error received. Try back after sometime");
    } else {
      res.json(rows);
    }
  })
});

app.listen(port);
