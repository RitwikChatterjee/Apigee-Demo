
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Ritwik-All\\Ritwik-Project\\Apigee\\Apigee-Demo\\Source\\Db\\Test-Data\\Customer.csv'
 REPLACE INTO TABLE `apigee_demo`.`Customer` CHARACTER SET latin1 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Ritwik-All\\Ritwik-Project\\Apigee\\Apigee-Demo\\Source\\Db\\Test-Data\\Customer_Contact.csv'
 REPLACE INTO TABLE `apigee_demo`.`Customer_Contact` CHARACTER SET latin1 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES;
LOAD DATA LOW_PRIORITY LOCAL INFILE 'C:\\Ritwik-All\\Ritwik-Project\\Apigee\\Apigee-Demo\\Source\\Db\\Test-Data\\Customer_Acc.csv'
 REPLACE INTO TABLE `apigee_demo`.`Customer_Acc` CHARACTER SET latin1 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 LINES
  (`Acc_Num`, `Customer_Id`, `Acc_Bal`, @Updt_time)
  SET Updt_time = STR_TO_DATE(@Updt_time, '%m/%d/%Y');
