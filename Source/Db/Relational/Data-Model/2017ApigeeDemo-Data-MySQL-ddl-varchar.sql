CREATE TABLE Acc_Txn
(
  Txn_Id varchar(10) NOT NULL,
  Acc_Num varchar(10) NOT NULL,
  Txn_Time datetime NOT NULL,
  Txn_Type char(2) NOT NULL,
  Txn_Details varchar(40) NOT NULL,
  Txn_Amount float NOT NULL,
  Txn_Status varchar(10) NOT NULL,
  Status_Time datetime NOT NULL,
  CONSTRAINT PK_Acc_Txn PRIMARY KEY (Txn_Id)
);

CREATE TABLE Customer
(
  Customer_Id varchar(10) NOT NULL,
  Customer_FName varchar(25) NOT NULL,
  Customer_LName varchar(25) NOT NULL,
  CONSTRAINT PK_Customer PRIMARY KEY (Customer_Id)
);

CREATE TABLE Customer_Acc
(
  Acc_Num varchar(10) NOT NULL,
  Customer_Id varchar(10) NOT NULL,
  Acc_Bal float NOT NULL DEFAULT 0,
  Updt_time datetime NOT NULL,
  CONSTRAINT PK_Customer_Acc PRIMARY KEY (Acc_Num)
);

CREATE TABLE Customer_Contact
(
  Contact_Id integer NOT NULL AUTO_INCREMENT,
  Customer_Id varchar(10) NOT NULL,
  Contact_Type varchar(10) NOT NULL,
  Contact_Info varchar(35) NOT NULL,
  Contact_Pref char(1),
  CONSTRAINT PK_Customer_Contact PRIMARY KEY (Contact_Id)
);

CREATE TABLE MFA_Inflight
(
  InFlight_Id varchar(10) NOT NULL,
  Txn_Id varchar(10) NOT NULL,
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

CREATE INDEX IX_Acc_Txn_Acc
  ON Acc_Txn (Acc_Num);

CREATE INDEX IX_Customer_Acc_
  ON Customer_Acc (Customer_Id);

CREATE INDEX IX_Customer_Contact_
  ON Customer_Contact (Customer_Id);

CREATE INDEX IX_MFA_Inflight_Txn
  ON MFA_Inflight (Txn_Id);

