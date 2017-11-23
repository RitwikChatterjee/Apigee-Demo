-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.20-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table apigee_demo.acc_txn
DROP TABLE IF EXISTS `acc_txn`;
CREATE TABLE IF NOT EXISTS `acc_txn` (
  `Txn_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Acc_Num` char(5) NOT NULL,
  `Txn_Time` datetime NOT NULL,
  `Txn_Type` char(2) NOT NULL,
  `Txn_Details` varchar(40) NOT NULL,
  `Txn_Amount` float NOT NULL,
  `Txn_Status` varchar(10) NOT NULL,
  `Status_Time` datetime NOT NULL,
  PRIMARY KEY (`Txn_Id`),
  KEY `IX_Acc_txn_Acc` (`Acc_Num`),
  CONSTRAINT `FK_Acc_txn_Acc` FOREIGN KEY (`Acc_Num`) REFERENCES `customer_acc` (`Acc_Num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table apigee_demo.customer
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `Customer_Id` char(4) NOT NULL,
  `Customer_FName` varchar(25) NOT NULL,
  `Customer_LName` varchar(25) NOT NULL,
  PRIMARY KEY (`Customer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table apigee_demo.customer_acc
DROP TABLE IF EXISTS `customer_acc`;
CREATE TABLE IF NOT EXISTS `customer_acc` (
  `Acc_Num` char(5) NOT NULL,
  `Customer_Id` char(4) NOT NULL,
  `Acc_Bal` float NOT NULL DEFAULT '0',
  `Updt_time` datetime NOT NULL,
  PRIMARY KEY (`Acc_Num`),
  KEY `IX_Customer_Acc_` (`Customer_Id`),
  CONSTRAINT `FK_Customer_Acc_Cust` FOREIGN KEY (`Customer_Id`) REFERENCES `customer` (`Customer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table apigee_demo.customer_contact
DROP TABLE IF EXISTS `customer_contact`;
CREATE TABLE IF NOT EXISTS `customer_contact` (
  `Contact_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Customer_Id` char(4) NOT NULL,
  `Contact_Type` varchar(10) NOT NULL,
  `Contact_Info` varchar(35) NOT NULL,
  `Contact_Pref` char(1) DEFAULT NULL,
  PRIMARY KEY (`Contact_Id`),
  KEY `IX_Customer_Contact_` (`Customer_Id`),
  CONSTRAINT `FK_Customer_Contact_Cust` FOREIGN KEY (`Customer_Id`) REFERENCES `customer` (`Customer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
-- Dumping structure for table apigee_demo.mfa_inflight
DROP TABLE IF EXISTS `mfa_inflight`;
CREATE TABLE IF NOT EXISTS `mfa_inflight` (
  `InFlight_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Txn_Id` int(11) NOT NULL,
  `Customer_Id` char(4) NOT NULL,
  `Contact_Info` varchar(35) NOT NULL,
  `Contact_Type` varchar(10) NOT NULL,
  `MF_Type` varchar(10) NOT NULL,
  `MF_Value` varchar(10) NOT NULL,
  `Status` varchar(10) NOT NULL,
  `Initiate_time` datetime NOT NULL,
  `Complete_time` datetime DEFAULT NULL,
  `Status_time` datetime NOT NULL,
  `Status_Loc` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`InFlight_Id`),
  KEY `IX_MFA_Inflight_Txn` (`Txn_Id`),
  CONSTRAINT `FK_MFA_Inflight_Txn` FOREIGN KEY (`Txn_Id`) REFERENCES `acc_txn` (`Txn_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
