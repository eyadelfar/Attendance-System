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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `course_id` int DEFAULT NULL,
  `semester_id` int DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `status` enum('joined','left') DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `attendance_id` int NOT NULL AUTO_INCREMENT,
  `lecture_id` int DEFAULT NULL,
  PRIMARY KEY (`attendance_id`),
  KEY `idx_attendance_course_id` (`course_id`),
  KEY `idx_attendance_student_id` (`student_id`),
  KEY `idx_attendance_session_id` (`semester_id`),
  KEY `fk_attendance_lecture` (`lecture_id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`),
  CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`semester_id`) REFERENCES `semester_details` (`semester_id`),
  CONSTRAINT `attendance_ibfk_3` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`),
  CONSTRAINT `fk_attendance_course_id` FOREIGN KEY (`course_id`) REFERENCES `course_details` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_attendance_lecture` FOREIGN KEY (`lecture_id`) REFERENCES `lectures` (`lecture_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_attendance_session_id` FOREIGN KEY (`semester_id`) REFERENCES `semester_details` (`semester_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_attendance_student_id` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_session_id` FOREIGN KEY (`semester_id`) REFERENCES `semester_details` (`semester_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_student_id` FOREIGN KEY (`student_id`) REFERENCES `student_details` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (1,5,'2024-04-06 11:17:00','joined',1,1,2),(1,5,'2024-04-06 00:37:00','left',1,2,2),(15,5,'2025-04-06 14:28:00','joined',3,3,20),(15,5,'2025-04-06 15:38:00','left',3,4,20),(8,4,'2024-10-08 16:12:00','joined',5,5,28),(8,4,'2024-10-08 17:22:00','left',5,6,28),(8,4,'2024-10-08 17:17:00','joined',8,7,39),(8,4,'2024-10-08 18:37:00','left',8,8,39),(3,1,'2023-03-13 15:18:00','joined',10,9,8),(3,1,'2023-03-13 16:48:00','left',10,10,8),(8,4,'2024-10-08 13:25:00','joined',12,11,6),(8,4,'2024-10-08 14:55:00','left',12,12,6),(12,1,'2023-10-02 12:24:00','joined',14,13,16),(12,1,'2023-10-03 13:34:00','left',14,14,16),(10,5,'2025-04-01 17:05:00','joined',18,15,37),(10,5,'2025-04-01 17:05:00','left',18,16,37),(7,2,'2023-09-25 13:18:00','joined',20,17,43),(7,2,'2023-09-25 14:58:00','left',20,18,43),(6,2,'2025-03-03 19:06:00','joined',22,19,36),(6,2,'2025-03-03 20:16:00','left',22,20,36),(15,5,'2025-04-06 15:24:00','joined',24,21,31),(15,5,'2025-04-06 16:54:00','left',24,22,31),(1,5,'2024-04-06 15:03:00','joined',27,23,35),(1,5,'2024-04-06 16:23:00','left',27,24,35),(12,1,'2023-10-02 11:09:00','joined',29,25,5),(12,1,'2023-10-02 12:19:00','left',29,26,5),(12,1,'2023-10-02 13:09:00','joined',31,27,27),(12,1,'2023-10-02 14:49:00','left',31,28,27),(8,4,'2024-10-08 15:09:00','joined',33,29,17),(8,4,'2024-10-08 16:09:00','left',33,30,17),(9,4,'2024-10-11 18:05:00','joined',36,31,44),(9,4,'2024-10-11 19:35:00','left',36,32,44),(4,3,'2024-09-20 13:04:00','joined',38,33,29),(4,3,'2024-09-20 14:14:00','left',38,34,29),(3,1,'2023-03-13 17:03:00','joined',41,35,19),(3,1,'2023-03-13 18:03:00','left',41,36,19),(9,4,'2024-10-11 16:05:00','joined',43,37,22),(9,4,'2024-10-11 17:05:00','left',43,38,22),(4,3,'2024-09-20 09:46:00','joined',45,39,7),(4,3,'2024-09-20 10:46:00','left',45,40,7),(6,2,'2025-03-03 16:25:00','joined',49,41,14),(6,2,'2025-03-03 17:45:00','left',49,42,14),(4,3,'2024-09-20 14:19:00','joined',51,43,40),(4,3,'2024-09-20 16:29:00','left',51,44,40),(3,1,'2023-03-13 18:18:00','joined',54,45,30),(3,1,'2023-03-13 20:18:00','left',54,46,30),(4,3,'2024-09-20 11:58:00','joined',56,47,18),(4,3,'2024-09-20 13:58:00','left',56,48,18),(15,5,'2025-04-06 13:22:00','joined',58,49,9),(15,5,'2025-04-06 15:22:00','left',58,50,9);
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `attendance_insert_trigger` AFTER INSERT ON `attendance` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('attendance', 'INSERT', CURRENT_TIMESTAMP);
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `attendance_update_trigger` AFTER UPDATE ON `attendance` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('attendance', 'UPDATE', CURRENT_TIMESTAMP);
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `attendance_delete_trigger` AFTER DELETE ON `attendance` FOR EACH ROW BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('attendance', 'DELETE', CURRENT_TIMESTAMP);
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

-- Dump completed on 2024-06-05 20:56:14
