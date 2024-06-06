CREATE DATABASE  IF NOT EXISTS `attendance` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `attendance`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: attendance
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `student_details`
--

DROP TABLE IF EXISTS `student_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_details` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `roll_no` varchar(16) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `level` int DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `roll_no` (`roll_no`),
  UNIQUE KEY `roll_no_2` (`roll_no`),
  UNIQUE KEY `phone_no` (`phone_no`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_details`
--

LOCK TABLES `student_details` WRITE;
/*!40000 ALTER TABLE `student_details` DISABLE KEYS */;
INSERT INTO `student_details` VALUES (1,'20200001','Youssef Swilam','01000000001','password0001',4),(2,'20200002','Mahmoud Ragab','01000000002','password0002',4),(3,'20200003','Ali Hamza','01000000003','password0003',4),(4,'20200004','Ehab Youseef','01000000004','password0004',4),(5,'20200005','Bedo Hazem','01000000005','password0005',4),(6,'20200006','Eyad el-Far','01000000006','password0006',4),(7,'20200007','Ahmed Mohamed','01000000007','password0007',1),(8,'20200008','Sara Ibrahim','01000000008','password0008',2),(9,'20200009','Youssef Ali','01000000009','password0009',3),(10,'20200010','Fatma Yassin','01000000010','password0010',4),(11,'20200011','Omar Sami','01000000011','password0011',1),(12,'20200012','Laila Mahmoud','01000000012','password0012',2),(13,'20200013','Mohamed Tarek','01000000013','password0013',3),(14,'20200014','Nour Hany','01000000014','password0014',4),(15,'20200015','Hassan Khaled','01000000015','password0015',1),(16,'20200016','Amira Nabil','01000000016','password0016',2),(17,'20200017','Khaled Saeed','01000000017','password0017',3),(18,'20200018','Salma Ali','01000000018','password0018',4),(19,'20200019','Ali Karim','01000000019','password0019',1),(20,'20200020','Farida Samir','01000000020','password0020',2),(21,'20200021','Tamer Fathy','01000000021','password0021',3),(22,'20200022','Rania Said','01000000022','password0022',4),(23,'20200023','Nader Adel','01000000023','password0023',1),(24,'20200024','Mai Reda','01000000024','password0024',2),(25,'20200025','Yara Gamal','01000000025','password0025',3),(26,'20200026','Tarek Fawzy','01000000026','password0026',4),(27,'20200027','Marwa Hisham','01000000027','password0027',1),(28,'20200028','Samir Ismail','01000000028','password0028',2),(29,'20200029','Nihal Wael','01000000029','password0029',3),(30,'20200030','Mostafa Shaker','01000000030','password0030',4),(31,'20200031','Nada Omar','01000000031','password0031',1),(32,'20200032','Ziad Zaki','01000000032','password0032',2),(33,'20200033','Lamia Kamel','01000000033','password0033',3),(34,'20200034','Fadi Essam','01000000034','password0034',4),(35,'20200035','Malak Nour','01000000035','password0035',1),(36,'20200036','Yehia Sobhy','01000000036','password0036',2),(37,'20200037','Dina Mounir','01000000037','password0037',3),(38,'20200038','Ola Essam','01000000038','password0038',4),(39,'20200039','Reda Shady','01000000039','password0039',1),(40,'20200040','Reem Hady','01000000040','password0040',2),(41,'20200041','Ramy Khalil','01000000041','password0041',3),(42,'20200042','Nagwa Samy','01000000042','password0042',4),(43,'20200043','Mohamed Gaber','01000000043','password0043',1),(44,'20200044','Lobna Farouk','01000000044','password0044',2),(45,'20200045','Karim Adel','01000000045','password0045',3),(46,'20200046','Nada Khaled','01000000046','password0046',4),(47,'20200047','Seif Ahmed','01000000047','password0047',1),(48,'20200048','Lina Mostafa','01000000048','password0048',2),(49,'20200049','Yara Mohsen','01000000049','password0049',3),(50,'20200050','Hany Ayman','01000000050','password0050',4),(51,'20200051','Randa Nasser','01000000051','password0051',1),(52,'20200052','Mina Adel','01000000052','password0052',2),(53,'20200053','Farah Tarek','01000000053','password0053',3),(54,'20200054','Sherif Yassin','01000000054','password0054',4),(55,'20200055','Sami Wahid','01000000055','password0055',1),(56,'20200056','Nada Nabil','01000000056','password0056',2),(57,'20200057','Salma Karim','01000000057','password0057',3),(58,'20200058','Wael Emad','01000000058','password0058',4),(59,'20200059','Lobna Zaki','01000000059','password0059',1),(60,'20200060','Tamer Galal','01000000060','password0060',2),(61,'20200061','Mai Yasser','01000000061','password0061',3),(62,'20200062','Ahmed Sami','01000000062','password0062',4),(63,'20200063','Hana Tamer','01000000063','password0063',1),(64,'20200064','Ramy Sayed','01000000064','password0064',2),(65,'20200065','Hadeer Anwar','01000000065','password0065',3),(66,'20200066','Khaled Gamal','01000000066','password0066',4);
/*!40000 ALTER TABLE `student_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `student_details_insert_trigger` AFTER INSERT ON `student_details` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('student_details', 'INSERT', CURRENT_TIMESTAMP);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `student_details_update_trigger` AFTER UPDATE ON `student_details` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('student_details', 'UPDATE', CURRENT_TIMESTAMP);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `student_details_delete_trigger` AFTER DELETE ON `student_details` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('student_details', 'DELETE', CURRENT_TIMESTAMP);
END */;;
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

-- Dump completed on 2024-06-05 16:09:09
