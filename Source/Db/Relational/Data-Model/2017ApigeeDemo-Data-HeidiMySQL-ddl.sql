-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.31-google - (Google)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table apigee_demo.Acc_Txn
DROP TABLE IF EXISTS `Acc_Txn`;
CREATE TABLE IF NOT EXISTS `Acc_Txn` (
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.Acc_Txn: ~6 rows (approximately)
DELETE FROM `Acc_Txn`;
/*!40000 ALTER TABLE `Acc_Txn` DISABLE KEYS */;
INSERT INTO `Acc_Txn` (`Txn_Id`, `Acc_Num`, `Txn_Time`, `Txn_Type`, `Txn_Details`, `Txn_Amount`, `Txn_Status`, `Status_Time`) VALUES
	(1, 'AC001', '2017-11-23 00:00:00', 'DR', 'Transfer', 1.23, 'Completed', '2017-11-24 21:14:28'),
	(2, 'AC001', '2017-11-23 00:00:00', 'DR', 'Transfer', 2.34, 'Pending', '2017-11-24 21:14:28'),
	(3, 'AC001', '2017-11-23 00:00:00', 'DR', 'Transfer', 3.45, 'Failed', '2017-11-24 21:14:28'),
	(4, 'AC002', '2017-11-23 00:00:00', 'DR', 'Transfer', 4.56, 'Completed', '2017-11-24 21:14:28'),
	(5, 'AC002', '2017-11-23 00:00:00', 'DR', 'Transfer', 5.67, 'Pending', '2017-11-24 21:14:28'),
	(6, 'AC002', '2017-11-23 00:00:00', 'DR', 'Transfer', 6.78, 'Failed', '2017-11-24 21:14:28');
/*!40000 ALTER TABLE `Acc_Txn` ENABLE KEYS */;

-- Dumping structure for table apigee_demo.Customer
DROP TABLE IF EXISTS `Customer`;
CREATE TABLE IF NOT EXISTS `Customer` (
  `Customer_Id` char(4) NOT NULL,
  `Customer_FName` varchar(25) NOT NULL,
  `Customer_LName` varchar(25) NOT NULL,
  PRIMARY KEY (`Customer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.Customer: ~2 rows (approximately)
DELETE FROM `Customer`;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` (`Customer_Id`, `Customer_FName`, `Customer_LName`) VALUES
	('C001', 'Kinu', 'Goyala'),
	('C002', 'Naru', 'Gopal');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;

-- Dumping structure for table apigee_demo.Customer_Acc
DROP TABLE IF EXISTS `Customer_Acc`;
CREATE TABLE IF NOT EXISTS `Customer_Acc` (
  `Acc_Num` char(5) NOT NULL,
  `Customer_Id` char(4) NOT NULL,
  `Acc_Bal` float NOT NULL DEFAULT '0',
  `Updt_time` datetime NOT NULL,
  PRIMARY KEY (`Acc_Num`),
  KEY `IX_Customer_Acc_` (`Customer_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.Customer_Acc: ~2 rows (approximately)
DELETE FROM `Customer_Acc`;
/*!40000 ALTER TABLE `Customer_Acc` DISABLE KEYS */;
INSERT INTO `Customer_Acc` (`Acc_Num`, `Customer_Id`, `Acc_Bal`, `Updt_time`) VALUES
	('AC001', 'C001', 500, '2017-11-22 00:00:00'),
	('AC002', 'C002', 540, '2017-11-22 00:00:00');
/*!40000 ALTER TABLE `Customer_Acc` ENABLE KEYS */;

-- Dumping structure for table apigee_demo.Customer_Contact
DROP TABLE IF EXISTS `Customer_Contact`;
CREATE TABLE IF NOT EXISTS `Customer_Contact` (
  `Contact_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Customer_Id` char(4) NOT NULL,
  `Contact_Type` varchar(10) NOT NULL,
  `Contact_Info` varchar(35) NOT NULL,
  `Contact_Pref` char(1) DEFAULT NULL,
  PRIMARY KEY (`Contact_Id`),
  KEY `IX_Customer_Contact_` (`Customer_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table apigee_demo.Customer_Contact: ~2 rows (approximately)
DELETE FROM `Customer_Contact`;
/*!40000 ALTER TABLE `Customer_Contact` DISABLE KEYS */;
INSERT INTO `Customer_Contact` (`Contact_Id`, `Customer_Id`, `Contact_Type`, `Contact_Info`, `Contact_Pref`) VALUES
	(1, 'C001', 'email', 'kinu.goyala@gmail.com', 'Y'),
	(2, 'C002', 'email', 'naru.gopal@gmail.com', 'Y');
/*!40000 ALTER TABLE `Customer_Contact` ENABLE KEYS */;

-- Dumping structure for table apigee_demo.MFA_Inflight
DROP TABLE IF EXISTS `MFA_Inflight`;
CREATE TABLE IF NOT EXISTS `MFA_Inflight` (
  `InFlight_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Txn_Id` int(11) NOT NULL,
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

-- Dumping data for table apigee_demo.MFA_Inflight: ~0 rows (approximately)
DELETE FROM `MFA_Inflight`;
/*!40000 ALTER TABLE `MFA_Inflight` DISABLE KEYS */;
/*!40000 ALTER TABLE `MFA_Inflight` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
