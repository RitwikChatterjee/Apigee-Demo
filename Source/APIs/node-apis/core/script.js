var express = require('express');
var app = express();
var port = process.env['PORT'] || 8080;


app.get('/customers', function (req, res) {

  // Setting args value
  var args;

  // START - portion for controller service file
  handlers.customersGET(args, res, processData);
  // END - portion for controller service file
});

app.get('/customers/:Id', function (req, res) {

  // This section should not be copied - START
  var args= {Id: {value: "Id"}};
  args.Id.value = req.params.Id;
  console.log("args.Id.value: ", args.Id.value);
  // This section should not be copied - END

  // START - portion for controller service file
  handlers.customersIdGET(args, res, processData);
  // END - portion for controller service file
});


// START - portion for controller service file
// Fetch data access handlers
const handlers = require('./data-access/handlers');

function processData(error, res, data) {
  var examples = {};

  if (error) {
    console.error("Error caught:", error);
    res.end("Sorry, error received. Try back after sometime");
  } else {
    examples['application/json'] = data;

    if (Object.keys(examples).length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
      res.end();
    }
  }
}
// END - portion for controller service file

app.listen(port);
