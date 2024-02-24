-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: attendance
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `data_changes`
--

DROP TABLE IF EXISTS `data_changes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_changes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) NOT NULL,
  `event_type` enum('INSERT','UPDATE','DELETE') NOT NULL,
  `event_timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_changes`
--

LOCK TABLES `data_changes` WRITE;
/*!40000 ALTER TABLE `data_changes` DISABLE KEYS */;
INSERT INTO `data_changes` VALUES (1,'attendance','INSERT','2024-02-22 11:22:04'),(2,'student_details','INSERT','2024-02-22 11:23:35'),(3,'course_allotment','UPDATE','2024-02-22 12:28:11'),(4,'course_allotment','UPDATE','2024-02-22 12:28:11'),(5,'course_allotment','UPDATE','2024-02-22 12:28:11'),(6,'course_allotment','UPDATE','2024-02-22 12:28:11'),(7,'course_allotment','UPDATE','2024-02-22 12:28:11'),(8,'course_allotment','UPDATE','2024-02-22 12:28:11'),(9,'course_allotment','UPDATE','2024-02-22 12:28:11'),(10,'course_allotment','UPDATE','2024-02-22 12:28:11'),(11,'course_allotment','UPDATE','2024-02-22 12:28:11'),(12,'course_allotment','UPDATE','2024-02-22 12:28:11'),(13,'course_allotment','UPDATE','2024-02-22 12:28:11'),(14,'course_allotment','UPDATE','2024-02-22 12:28:11'),(15,'course_allotment','UPDATE','2024-02-22 12:28:11'),(16,'course_allotment','UPDATE','2024-02-22 12:28:11'),(17,'course_allotment','UPDATE','2024-02-22 12:28:11'),(18,'course_allotment','UPDATE','2024-02-22 12:28:11'),(19,'course_allotment','UPDATE','2024-02-22 12:28:11'),(20,'course_allotment','UPDATE','2024-02-22 12:28:11'),(21,'course_allotment','UPDATE','2024-02-22 12:28:11'),(22,'course_allotment','UPDATE','2024-02-22 12:28:11'),(23,'course_allotment','UPDATE','2024-02-22 12:28:11'),(24,'course_allotment','UPDATE','2024-02-22 12:28:11'),(25,'course_allotment','INSERT','2024-02-22 12:28:11'),(26,'course_allotment','UPDATE','2024-02-22 12:28:11'),(27,'course_allotment','DELETE','2024-02-22 13:32:11');
/*!40000 ALTER TABLE `data_changes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-22 17:59:39
