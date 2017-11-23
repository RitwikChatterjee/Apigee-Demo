LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Ritwik-All\\Ritwik-Project\\Apigee\\Apigee-Demo\\Source\\Db\\Test-Data\\Acc_Txn.csv'
 REPLACE INTO TABLE `apigee_demo`.`acc_txn` CHARACTER SET latin1 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES
  (`Txn_Id`, `Acc_Num`, @Txn_Time, `Txn_Type`, `Txn_Details`, `Txn_Amount`, `Txn_Status`, @Status_Time)
  SET Txn_Time = STR_TO_DATE(@Txn_Time, '%m/%d/%Y'), Status_Time = CURRENT_TIMESTAMP;
