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
-- Table structure for table `course_allotment`
--

DROP TABLE IF EXISTS `course_allotment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_allotment` (
  `faculty_id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `session_id` int DEFAULT NULL,
  `allotment_id` int NOT NULL AUTO_INCREMENT,
  `allotment_date` date DEFAULT NULL,
  PRIMARY KEY (`allotment_id`),
  KEY `fk_course_allotment_faculty_id` (`faculty_id`),
  KEY `fk_course_allotment_course_id` (`course_id`),
  KEY `fk_course_allotment_session_id` (`session_id`),
  CONSTRAINT `course_allotment_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `course_allotment_ibfk_2` FOREIGN KEY (`session_id`) REFERENCES `session_details` (`session_id`),
  CONSTRAINT `course_allotment_ibfk_3` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`),
  CONSTRAINT `fk_course_allotment_course_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `fk_course_allotment_faculty_id` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`),
  CONSTRAINT `fk_course_allotment_session_id` FOREIGN KEY (`session_id`) REFERENCES `session_details` (`session_id`),
  CONSTRAINT `fk_course_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `fk_faculty_id` FOREIGN KEY (`faculty_id`) REFERENCES `faculty_details` (`faculty_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_allotment`
--

LOCK TABLES `course_allotment` WRITE;
/*!40000 ALTER TABLE `course_allotment` DISABLE KEYS */;
INSERT INTO `course_allotment` VALUES (1,1,1,1,'2024-01-28'),(2,2,1,2,'2024-01-25'),(1,3,1,3,'2024-01-26'),(3,4,2,4,'2024-01-27'),(3,5,2,5,'2024-01-27'),(2,6,2,6,'2024-01-28'),(1,7,2,7,'2024-01-28'),(2,8,2,8,'2024-01-22'),(3,9,2,9,'2024-01-24'),(1,10,2,10,'2024-01-24'),(2,11,2,11,'2024-01-24'),(3,12,2,12,'2024-01-24'),(2,13,2,13,'2024-01-26'),(1,14,3,14,'2024-01-26'),(1,15,3,15,'2024-01-25'),(3,16,3,16,'2024-01-25'),(3,17,3,17,'2024-01-25'),(2,18,3,18,'2024-01-27'),(3,19,3,19,'2024-01-22'),(2,20,3,20,'2024-01-22'),(1,21,3,21,'2024-01-22'),(2,22,3,22,'2024-01-22'),(2,23,3,23,'2024-01-23');
/*!40000 ALTER TABLE `course_allotment` ENABLE KEYS */;
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
