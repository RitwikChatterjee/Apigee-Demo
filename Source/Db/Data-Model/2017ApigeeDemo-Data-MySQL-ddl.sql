CREATE TABLE Acc_txn
(
  Txn_Id integer unsigned NOT NULL AUTO_INCREMENT,
  Acc_Num char(5) NOT NULL,
  Txn_Time datetime NOT NULL,
  Txn_Type char(2) NOT NULL,
  Txn_Details varchar(40) NOT NULL,
  Txn_Amount float NOT NULL,
  Txn_Status varchar(10) NOT NULL,
  Status_Time datetime NOT NULL,
  CONSTRAINT PK_Acc_txn PRIMARY KEY (Txn_Id)
);

CREATE TABLE Customer
(
  Customer_Id char(4) NOT NULL AUTO_INCREMENT,
  Customer_FName varchar(25) NOT NULL,
  Customer_LName varbinary(25) NOT NULL,
  CONSTRAINT PK_Customer PRIMARY KEY (Customer_Id)
);

CREATE TABLE Customer_Acc
(
  Acc_Num char(5) NOT NULL AUTO_INCREMENT,
  Customer_Id char(4) NOT NULL,
  Acc_Bal float NOT NULL DEFAULT 0,
  Updt_time datetime NOT NULL,
  CONSTRAINT PK_Customer_Acc PRIMARY KEY (Acc_Num)
);

CREATE TABLE Customer_Contact
(
  Contact_Id integer unsigned NOT NULL AUTO_INCREMENT,
  Customer_Id char(4) NOT NULL,
  Contact_Type varchar(10) NOT NULL,
  Contact_Info varchar(35) NOT NULL,
  Contact_Pref char(1),
  CONSTRAINT PK_Customer_Contact PRIMARY KEY (Contact_Id)
);

CREATE TABLE MFA_Inflight
(
  InFlight_Id bigint NOT NULL AUTO_INCREMENT,
  Txn_Id integer unsigned NOT NULL,
  Customer_Id char(4) NOT NULL,
  Contact_Info varchar(35) NOT NULL,
  Contact_Type varchar(10) NOT NULL,
  MF_Type varchar(10) NOT NULL,
  MF_Value varchar(10) NOT NULL,
  Status varchar(10) NOT NULL,
  Initiate_time datetime NOT NULL,
  Complete_time datetime,
  Status_time datetime NOT NULL,
  Status_Loc varchar(25),
  CONSTRAINT PK_MFA_Inflight PRIMARY KEY (InFlight_Id)
);

ALTER TABLE Acc_txn ADD CONSTRAINT FK_Acc_txn_Acc
  FOREIGN KEY (Acc_Num) REFERENCES Customer_Acc (Acc_Num);

ALTER TABLE Customer_Acc ADD CONSTRAINT FK_Customer_Acc_Cust
  FOREIGN KEY (Customer_Id) REFERENCES Customer (Customer_Id);

ALTER TABLE Customer_Contact ADD CONSTRAINT FK_Customer_Contact_Cust
  FOREIGN KEY (Customer_Id) REFERENCES Customer (Customer_Id);

ALTER TABLE MFA_Inflight ADD CONSTRAINT FK_Inflight_Txn
  FOREIGN KEY (Txn_Id) REFERENCES Acc_txn (Txn_Id);

CREATE INDEX IX_Acc_txn_Acc
  ON Acc_txn (Acc_Num);

CREATE INDEX IX_Customer_Acc_
  ON Customer_Acc (Customer_Id);

CREATE INDEX IX_Customer_Contact_
  ON Customer_Contact (Customer_Id);

CREATE INDEX IX_MFA_Inflight_Txn
  ON MFA_Inflight (Txn_Id);

