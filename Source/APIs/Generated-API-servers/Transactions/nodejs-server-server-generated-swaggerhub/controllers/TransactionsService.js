'use strict';

exports.dELETETransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.gETTransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "Txn_Id" : 56539511,
  "Txn_Type" : "Dr",
  "Status_Time" : "2017-11-25 22:15:32",
  "Acc_Num" : "AC001",
  "Txn_Details" : "Transfer/Withdrawal",
  "Txn_Amout" : 22.51,
  "Txn_Time" : "2017-11-25 21:15:32",
  "Txn_Status" : "Completed"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.lISTTransactions = function(args, res, next) {
  /**
   * parameters expected in the args:
  * acc_num (String)
  * start_dt (String)
  * end_dt (String)
  * offset (BigDecimal)
  * limit (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "Txn_Id" : 56539511,
  "Txn_Type" : "Dr",
  "Status_Time" : "2017-11-25 22:17:32",
  "Acc_Num" : "AC001",
  "Txn_Details" : "Transfer/Withdrawal",
  "Txn_Amout" : 22.51,
  "Txn_Time" : "2017-11-25 21:15:32",
  "Txn_Status" : "Completed"
}, {
  "Txn_Id" : 56555511,
  "Txn_Type" : "Dr",
  "Status_Time" : "2017-11-23 12:15:32",
  "Acc_Num" : "AC001",
  "Txn_Details" : "Transfer/Withdrawal",
  "Txn_Amout" : 22.53,
  "Txn_Time" : "2017-11-23 12:15:00",
  "Txn_Status" : "Pending"
}, {
  "Txn_Id" : 56539511,
  "Txn_Type" : "Dr",
  "Status_Time" : "2017-10-25 22:19:32",
  "Acc_Num" : "AC001",
  "Txn_Details" : "Transfer/Withdrawal",
  "Txn_Amout" : 22.51,
  "Txn_Time" : "2017-11-25 21:15:32",
  "Txn_Status" : "Failed"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.pOSTTransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Transaction-input)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.pUTTransaction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * body (Transaction-input)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

