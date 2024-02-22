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
-- Table structure for table `student_details`
--

DROP TABLE IF EXISTS `student_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_details` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `roll_no` varchar(15) DEFAULT NULL,
  `name` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `roll_no` (`roll_no`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_details`
--

LOCK TABLES `student_details` WRITE;
/*!40000 ALTER TABLE `student_details` DISABLE KEYS */;
INSERT INTO `student_details` VALUES (1,'S001','Alice Johnson','123-456-7890'),(2,'S002','Bob Smith','234-567-8901'),(3,'S003','Ethan Miller','345-678-9012'),(4,'S004','Sophia Moore','456-789-0123'),(5,'S005','Michael Johnson','567-890-1234'),(6,'S006','Isabella Brown','678-901-2345'),(7,'S007','Mason Jones','789-012-3456'),(8,'S008','Amelia Davis','890-123-4567'),(9,'S009','Jacob Wilson','901-234-5678'),(10,'S010','Olivia Taylor','012-345-6789'),(11,'S011','Alexander Martinez','123-456-7890'),(12,'S012','Ava Anderson','234-567-8901'),(13,'S013','Sophia Moore','345-678-9012'),(14,'S014','Michael Johnson','456-789-0123'),(15,'S015','Isabella Brown','567-890-1234'),(16,'S016','Mason Jones','678-901-2345'),(17,'S017','Amelia Davis','789-012-3456'),(18,'S018','Jacob Wilson','890-123-4567'),(19,'S019','Olivia Taylor','901-234-5678'),(20,'S020','Alexander Martinez','012-345-6789'),(21,'S021','Ava Anderson','123-456-7890'),(22,'S022','Ethan Miller','234-567-8901'),(26,'S023','Bola','555-999-5555');
/*!40000 ALTER TABLE `student_details` ENABLE KEYS */;
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
