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
-- Table structure for table `lectures`
--

DROP TABLE IF EXISTS `lectures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lectures` (
  `lecture_id` int NOT NULL AUTO_INCREMENT,
  `semester_id` int DEFAULT NULL,
  `lecture_date` date DEFAULT NULL,
  `lecture_time` time DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  PRIMARY KEY (`lecture_id`),
  KEY `fk_lectures_course_id` (`course_id`),
  KEY `lectures_ibfk_1` (`semester_id`),
  CONSTRAINT `fk_lectures_course_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lectures_ibfk_1` FOREIGN KEY (`semester_id`) REFERENCES `semester_details` (`semester_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lectures`
--

LOCK TABLES `lectures` WRITE;
/*!40000 ALTER TABLE `lectures` DISABLE KEYS */;
INSERT INTO `lectures` VALUES (1,1,'2023-03-01','09:00:00',1),(2,1,'2023-03-03','11:00:00',1),(3,2,'2023-09-05','10:00:00',2),(4,3,'2024-03-10','08:00:00',3),(5,4,'2024-09-12','14:00:00',4),(6,5,'2025-03-15','13:00:00',5),(7,2,'2023-09-07','12:00:00',6),(8,3,'2024-03-12','15:00:00',7),(9,4,'2024-09-14','09:00:00',8),(10,5,'2025-03-17','11:00:00',9),(11,1,'2023-03-05','13:00:00',10),(12,1,'2023-03-07','10:00:00',11),(13,2,'2023-09-09','14:00:00',12),(14,3,'2024-03-14','09:00:00',13),(15,4,'2024-09-16','12:00:00',14),(16,5,'2025-03-19','15:00:00',15),(17,2,'2023-09-11','10:00:00',16),(18,3,'2024-03-16','13:00:00',17),(19,4,'2024-09-18','08:00:00',18),(20,5,'2025-03-21','11:00:00',19),(21,1,'2023-03-09','14:00:00',20),(22,1,'2023-03-11','09:00:00',21),(23,2,'2023-09-13','12:00:00',22),(24,3,'2024-03-18','15:00:00',23),(25,4,'2024-09-20','10:00:00',24),(26,5,'2025-03-23','13:00:00',25),(27,2,'2023-09-15','08:00:00',26),(28,3,'2024-03-20','11:00:00',27),(29,4,'2024-09-22','14:00:00',28),(30,5,'2025-03-25','09:00:00',29),(31,1,'2023-03-13','12:00:00',30),(32,1,'2023-03-15','15:00:00',31),(33,2,'2023-09-17','09:00:00',32),(34,3,'2024-03-22','13:00:00',33),(35,4,'2024-09-24','08:00:00',34),(36,5,'2025-03-27','11:00:00',35),(37,2,'2023-09-19','14:00:00',36),(38,3,'2024-03-24','10:00:00',37),(39,4,'2024-09-26','13:00:00',38),(40,5,'2025-03-29','08:00:00',39),(41,1,'2023-03-17','11:00:00',40),(42,1,'2023-03-19','14:00:00',41),(43,2,'2023-09-21','09:00:00',42),(44,3,'2024-03-26','12:00:00',43),(45,4,'2024-09-28','15:00:00',44),(46,5,'2025-03-31','10:00:00',45),(47,2,'2023-09-23','13:00:00',46),(48,3,'2024-03-28','08:00:00',47),(49,4,'2024-09-30','11:00:00',48),(50,5,'2025-04-02','14:00:00',49),(51,1,'2023-03-21','09:00:00',50),(52,1,'2023-03-23','11:00:00',1),(53,2,'2023-09-25','10:00:00',2),(54,3,'2024-03-27','08:00:00',3),(55,4,'2024-09-29','14:00:00',4),(56,5,'2025-04-01','13:00:00',5),(57,2,'2023-09-28','12:00:00',6),(58,3,'2024-04-02','15:00:00',7),(59,4,'2024-10-01','09:00:00',8),(60,5,'2025-04-04','11:00:00',9),(61,1,'2023-03-27','13:00:00',10),(62,1,'2023-03-29','10:00:00',11),(63,2,'2023-10-02','14:00:00',12),(64,3,'2024-04-05','09:00:00',13),(65,4,'2024-10-04','12:00:00',14),(66,5,'2025-04-06','15:00:00',15),(67,2,'2023-10-04','10:00:00',16),(68,3,'2024-04-07','13:00:00',17),(69,4,'2024-10-06','08:00:00',18),(70,5,'2025-04-08','11:00:00',19),(71,1,'2023-04-01','14:00:00',20),(72,1,'2023-04-03','09:00:00',21),(73,2,'2023-10-06','12:00:00',22),(74,3,'2024-04-09','15:00:00',23),(75,4,'2024-10-08','10:00:00',24),(76,5,'2025-04-10','13:00:00',25),(77,2,'2023-10-09','08:00:00',26),(78,3,'2024-04-12','11:00:00',27),(79,4,'2024-10-11','14:00:00',28),(80,5,'2025-04-13','09:00:00',29),(81,1,'2023-04-06','12:00:00',30),(82,1,'2023-04-08','15:00:00',31),(83,2,'2023-10-12','09:00:00',32),(84,3,'2024-04-14','13:00:00',33),(85,4,'2024-10-14','08:00:00',34),(86,5,'2025-04-16','11:00:00',35),(87,2,'2023-10-14','14:00:00',36),(88,3,'2024-04-16','10:00:00',37),(89,4,'2024-10-16','13:00:00',38),(90,5,'2025-04-18','08:00:00',39),(91,1,'2023-04-10','11:00:00',40),(92,1,'2023-04-12','14:00:00',41),(93,2,'2023-10-18','09:00:00',42),(94,3,'2024-04-18','12:00:00',43),(95,4,'2024-10-18','15:00:00',44),(96,5,'2025-04-20','10:00:00',45),(97,2,'2023-10-20','13:00:00',46),(98,3,'2024-04-20','08:00:00',47),(99,4,'2024-10-20','11:00:00',48),(100,5,'2025-04-22','14:00:00',49);
/*!40000 ALTER TABLE `lectures` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `set_default_lecture_date_time` BEFORE INSERT ON `lectures` FOR EACH ROW BEGIN
    IF NEW.lecture_date IS NULL THEN
        SET NEW.lecture_date = CURRENT_DATE;
    END IF;
    IF NEW.lecture_time IS NULL THEN
        SET NEW.lecture_time = CURRENT_TIME;
    END IF;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `lectures_delete_trigger` AFTER DELETE ON `lectures` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('lectures', 'DELETE', CURRENT_TIMESTAMP);
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
