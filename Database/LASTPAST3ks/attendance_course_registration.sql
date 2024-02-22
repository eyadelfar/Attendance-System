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
-- Table structure for table `course_registration`
--

DROP TABLE IF EXISTS `course_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_registration` (
  `course_id` int DEFAULT NULL,
  `registration_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  PRIMARY KEY (`registration_id`),
  KEY `fk_course_registration_course_id` (`course_id`),
  KEY `fk_course_registration_student_id` (`student_id`),
  CONSTRAINT `course_registration_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `fk_course_registration_course_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `fk_course_registration_student_id` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`),
  CONSTRAINT `fk_student_reg_id` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_registration`
--

LOCK TABLES `course_registration` WRITE;
/*!40000 ALTER TABLE `course_registration` DISABLE KEYS */;
INSERT INTO `course_registration` VALUES (1,1,1),(2,2,1),(3,3,2),(4,4,3),(5,5,4),(6,6,5),(7,7,6),(8,8,7),(9,9,8),(10,10,9),(11,11,10),(12,12,11),(13,13,12),(14,14,13),(15,15,14),(16,16,15),(17,17,16),(18,18,17),(19,19,18),(20,20,19),(21,21,20),(22,22,21),(23,23,22);
/*!40000 ALTER TABLE `course_registration` ENABLE KEYS */;
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
