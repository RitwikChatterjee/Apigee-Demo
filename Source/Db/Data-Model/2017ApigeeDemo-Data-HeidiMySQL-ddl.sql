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
  KEY `IX_Acc_txn_Acc` (`Acc_Num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.acc_txn: ~0 rows (approximately)
DELETE FROM `acc_txn`;
/*!40000 ALTER TABLE `acc_txn` DISABLE KEYS */;
/*!40000 ALTER TABLE `acc_txn` ENABLE KEYS */;

-- Dumping structure for table apigee_demo.customer
DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `Customer_Id` char(4) NOT NULL,
  `Customer_FName` varchar(25) NOT NULL,
  `Customer_LName` varchar(25) NOT NULL,
  PRIMARY KEY (`Customer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.customer: ~0 rows (approximately)
DELETE FROM `customer`;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`Customer_Id`, `Customer_FName`, `Customer_LName`) VALUES
	('C001', 'Kinu', 'Goyala'),
	('C002', 'Naru', 'Gopal');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

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

-- Dumping data for table apigee_demo.customer_acc: ~0 rows (approximately)
DELETE FROM `customer_acc`;
/*!40000 ALTER TABLE `customer_acc` DISABLE KEYS */;
INSERT INTO `customer_acc` (`Acc_Num`, `Customer_Id`, `Acc_Bal`, `Updt_time`) VALUES
	('AC001', 'C001', 500, '2017-11-22 00:00:00'),
	('AC002', 'C002', 540, '2017-11-22 00:00:00');
/*!40000 ALTER TABLE `customer_acc` ENABLE KEYS */;

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

-- Dumping data for table apigee_demo.customer_contact: ~0 rows (approximately)
DELETE FROM `customer_contact`;
/*!40000 ALTER TABLE `customer_contact` DISABLE KEYS */;
INSERT INTO `customer_contact` (`Contact_Id`, `Customer_Id`, `Contact_Type`, `Contact_Info`, `Contact_Pref`) VALUES
	(1, 'C001', 'email', 'kinu.goyala@gmail.com', 'Y'),
	(2, 'C002', 'email', 'naru.gopal@gmail.com', 'Y');
/*!40000 ALTER TABLE `customer_contact` ENABLE KEYS */;

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
  KEY `IX_MFA_Inflight_Txn` (`Txn_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.mfa_inflight: ~0 rows (approximately)
DELETE FROM `mfa_inflight`;
/*!40000 ALTER TABLE `mfa_inflight` DISABLE KEYS */;
/*!40000 ALTER TABLE `mfa_inflight` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
