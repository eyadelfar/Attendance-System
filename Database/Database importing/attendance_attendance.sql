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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `course_id` int DEFAULT NULL,
  `session_id` int DEFAULT NULL,
  `timestamp` date DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `attendance_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`attendance_id`),
  KEY `fk_attendance_course_id` (`course_id`),
  KEY `fk_attendance_session_id` (`session_id`),
  KEY `fk_attendance_student_id` (`student_id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`session_id`) REFERENCES `session_details` (`session_id`),
  CONSTRAINT `attendance_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`),
  CONSTRAINT `fk_attendance_course_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `fk_attendance_session_id` FOREIGN KEY (`session_id`) REFERENCES `session_details` (`session_id`),
  CONSTRAINT `fk_attendance_student_id` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`),
  CONSTRAINT `fk_session_id` FOREIGN KEY (`session_id`) REFERENCES `session_details` (`session_id`),
  CONSTRAINT `fk_student_id` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (1,1,'2024-02-18','Present',2,1),(1,1,'2024-02-19','Present',1,2),(1,1,'2024-02-20','Present',2,3),(1,1,'2024-02-21','Absent',2,4),(2,2,'2024-02-19','Present',1,5),(2,2,'2024-02-19','Absent',2,6),(4,2,'2024-09-01','Present',3,7),(4,4,'2024-09-01','Absent',4,8),(14,3,'2025-01-02','Present',13,9),(14,3,'2025-01-03','Absent',14,10),(15,3,'2025-01-04','Present',15,11),(15,4,'2025-01-03','Present',16,12),(16,2,'2025-01-02','Absent',17,13),(16,3,'2025-01-04','Present',18,14),(17,2,'2025-01-06','Present',19,15),(17,3,'2025-01-06','Absent',20,16),(18,3,'2025-01-07','Present',21,17),(8,4,'2024-02-04','Present',1,18),(8,1,'2024-02-12','Present',2,19),(7,1,'2024-02-14','Absent',3,20),(6,3,'2025-01-17','Absent',20,21),(5,3,'2025-01-15','Present',21,22),(4,4,'2024-02-14','Present',1,23),(5,1,'2024-02-16','Present',2,24),(3,2,'2024-02-16','Absent',3,25),(17,3,'2025-01-02','Absent',20,26),(3,3,'2025-01-07','Present',21,27),(16,1,'2024-02-19','Present',1,28),(15,2,'2024-02-18','Present',2,29),(10,1,'2024-02-18','Absent',3,30),(17,3,'2025-01-01','Absent',20,31),(18,3,'2025-01-01','Present',21,32),(13,4,'2024-02-18','Present',1,33),(9,1,'2024-02-18','Present',2,34),(7,2,'2024-02-18','Absent',3,35),(2,1,'2024-02-18','Present',2,36),(12,4,'2024-02-18','Absent',3,37),(17,3,'2025-01-01','Absent',20,38),(18,4,'2025-01-01','Present',21,39),(13,1,'2024-02-18','Present',1,40),(10,2,'2024-02-18','Present',2,41),(7,1,'2024-02-18','Absent',3,42),(3,2,'2024-03-05','present',3,43);
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-22 17:59:40
