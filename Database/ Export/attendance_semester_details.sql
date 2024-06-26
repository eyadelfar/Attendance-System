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
-- Table structure for table `semester_details`
--

DROP TABLE IF EXISTS `semester_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semester_details` (
  `semester_id` int NOT NULL AUTO_INCREMENT,
  `year` year DEFAULT NULL,
  `term` varchar(12) DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `faculty_id` int DEFAULT NULL,
  PRIMARY KEY (`semester_id`),
  KEY `fk_course_session_id` (`course_id`),
  KEY `fk_faculty_id` (`faculty_id`),
  CONSTRAINT `fk_course_session_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_faculty_id` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester_details`
--

LOCK TABLES `semester_details` WRITE;
/*!40000 ALTER TABLE `semester_details` DISABLE KEYS */;
INSERT INTO `semester_details` VALUES (1,2023,'Spring',1,1),(2,2023,'Fall',2,2),(3,2024,'Spring',3,3),(4,2024,'Fall',4,4),(5,2025,'Spring',5,5),(6,2023,'Fall',6,1),(7,2024,'Spring',7,2),(8,2024,'Fall',8,3),(9,2025,'Spring',9,4),(10,2025,'Fall',10,5),(11,2023,'Spring',11,1),(12,2023,'Fall',12,2),(13,2024,'Spring',13,3),(14,2024,'Fall',14,4),(15,2025,'Spring',15,5),(16,2023,'Spring',16,1),(17,2023,'Fall',17,2),(18,2024,'Spring',18,3),(19,2024,'Fall',19,4),(20,2025,'Spring',20,5),(21,2023,'Spring',21,1),(22,2023,'Fall',22,2),(23,2024,'Spring',23,3),(24,2024,'Fall',24,4),(25,2025,'Spring',25,5),(26,2023,'Spring',26,1),(27,2023,'Fall',27,2),(28,2024,'Spring',28,3),(29,2024,'Fall',29,4),(30,2025,'Spring',30,5),(31,2023,'Spring',31,1),(32,2023,'Fall',32,2),(33,2024,'Spring',33,3),(34,2024,'Fall',34,4),(35,2025,'Spring',35,5),(36,2023,'Spring',36,1),(37,2023,'Fall',37,2),(38,2024,'Spring',38,3),(39,2024,'Fall',39,4),(40,2025,'Spring',40,5),(41,2023,'Spring',41,1),(42,2023,'Fall',42,2),(43,2024,'Spring',43,3),(44,2024,'Fall',44,4),(45,2025,'Spring',45,5),(46,2023,'Spring',46,1),(47,2023,'Fall',47,2),(48,2024,'Spring',48,3),(49,2024,'Fall',49,4),(50,2025,'Spring',50,5),(51,2025,'spring',1,3);
/*!40000 ALTER TABLE `semester_details` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `session_details_insert_trigger` AFTER INSERT ON `semester_details` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'INSERT', CURRENT_TIMESTAMP);
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `session_details_update_trigger` AFTER UPDATE ON `semester_details` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'UPDATE', CURRENT_TIMESTAMP);
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `session_details_delete_trigger` AFTER DELETE ON `semester_details` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'DELETE', CURRENT_TIMESTAMP);
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

-- Dump completed on 2024-06-06 19:27:32
