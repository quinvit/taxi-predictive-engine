CREATE DATABASE  IF NOT EXISTS `taxi_booking` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `taxi_booking`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: taxi_booking
-- ------------------------------------------------------
-- Server version	5.6.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `areas` (
  `area_id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(512) DEFAULT NULL,
  `latitude` decimal(10,0) DEFAULT NULL,
  `longitude` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`area_id`),
  KEY `position` (`latitude`,`longitude`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (1,'100 ABC',5,10),(2,'101 DEF',7,4),(3,'102 GHK',2,19),(4,'103 UBT',4,1),(5,'104 SKG',8,12);
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `area_id` int(11) DEFAULT NULL,
  `taxi_id` int(11) DEFAULT NULL,
  `booking_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  KEY `booking_time` (`booking_time`,`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (2,3,3,'2014-06-01 23:27:01'),(3,3,2,'2014-06-01 23:27:01'),(4,3,1,'2014-06-01 23:27:01'),(5,2,1,'2014-06-03 21:47:01'),(6,5,1,'2014-06-03 21:47:01'),(7,3,4,'2014-06-01 23:34:27'),(8,3,2,'2014-06-01 23:23:27');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drivers` (
  `driver_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(256) DEFAULT NULL,
  `cellphone` varchar(16) DEFAULT NULL,
  `taxi_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`driver_id`),
  KEY `taxi_id` (`taxi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers`
--

LOCK TABLES `drivers` WRITE;
/*!40000 ALTER TABLE `drivers` DISABLE KEYS */;
INSERT INTO `drivers` VALUES (1,'Peter','+847391748669',1),(2,'John','+847268486692',2),(3,'Dillon','+846573028741',3),(4,'Kaka','+846573027348',4),(5,'Samuel','+847268481363',5);
/*!40000 ALTER TABLE `drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxi_positions`
--

DROP TABLE IF EXISTS `taxi_positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taxi_positions` (
  `taxi_id` int(11) NOT NULL,
  `latitude` decimal(10,0) DEFAULT NULL,
  `longitude` decimal(10,0) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`taxi_id`),
  KEY `position` (`latitude`,`longitude`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxi_positions`
--

LOCK TABLES `taxi_positions` WRITE;
/*!40000 ALTER TABLE `taxi_positions` DISABLE KEYS */;
INSERT INTO `taxi_positions` VALUES (2,2,19,0),(3,3,10,0),(4,7,5,0),(5,5,12,0);
/*!40000 ALTER TABLE `taxi_positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxis`
--

DROP TABLE IF EXISTS `taxis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taxis` (
  `taxi_id` int(11) NOT NULL AUTO_INCREMENT,
  `taxi_number` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`taxi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxis`
--

LOCK TABLES `taxis` WRITE;
/*!40000 ALTER TABLE `taxis` DISABLE KEYS */;
INSERT INTO `taxis` VALUES (1,'0001'),(2,'0002'),(3,'0003'),(4,'0004'),(5,'0005');
/*!40000 ALTER TABLE `taxis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'taxi_booking'
--
/*!50003 DROP PROCEDURE IF EXISTS `taxi_less_supply_high_demand` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `taxi_less_supply_high_demand`()
BEGIN
SELECT taxi_positions.taxi_id,
       areas.area_id
FROM areas
LEFT JOIN taxi_positions ON taxi_positions.latitude < areas.latitude + 5 #radius of 5km
AND taxi_positions.latitude > areas.latitude - 5
AND taxi_positions.longitude < areas.longitude + 5
AND taxi_positions.longitude > areas.longitude - 5
WHERE areas.area_id IN
    ( SELECT area_id
     FROM
       ( SELECT count(taxi_positions.taxi_id) AS available_taxis,
                areas.area_id
        FROM areas
        LEFT JOIN taxi_positions ON taxi_positions.latitude < areas.latitude + 1 #radius of 1km
        AND taxi_positions.latitude > areas.latitude - 1
        AND taxi_positions.longitude < areas.longitude + 1
        AND taxi_positions.longitude > areas.longitude - 1
        AND areas.area_id IN
          ( SELECT area_id
           FROM
             ( SELECT count(1) AS number_of_booking,
                      bookings.area_id
              FROM bookings
              WHERE booking_time < NOW()
                AND DAYOFWEEK(booking_time) = DAYOFWEEK(NOW())
                AND HOUR(booking_time) = HOUR(NOW())
                AND MINUTE(booking_time) < MINUTE(NOW()) + 30 ) a #around 30 minutes later
           WHERE number_of_booking > 2 ) ) b
     WHERE available_taxis < 2 );
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-06-09  0:31:17
