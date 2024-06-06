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
-- Temporary view structure for view `attendance_summary`
--

DROP TABLE IF EXISTS `attendance_summary`;
/*!50001 DROP VIEW IF EXISTS `attendance_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `attendance_summary` AS SELECT 
 1 AS `attendance_id`,
 1 AS `student_id`,
 1 AS `course_id`,
 1 AS `semester_id`,
 1 AS `timestamp`,
 1 AS `status`,
 1 AS `lecture_id`,
 1 AS `lecture_date`,
 1 AS `lecture_time`,
 1 AS `course_code`,
 1 AS `course_title`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `lecture_summary`
--

DROP TABLE IF EXISTS `lecture_summary`;
/*!50001 DROP VIEW IF EXISTS `lecture_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `lecture_summary` AS SELECT 
 1 AS `lecture_id`,
 1 AS `semester_id`,
 1 AS `lecture_date`,
 1 AS `lecture_time`,
 1 AS `course_id`,
 1 AS `course_code`,
 1 AS `course_title`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `semester_overview`
--

DROP TABLE IF EXISTS `semester_overview`;
/*!50001 DROP VIEW IF EXISTS `semester_overview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `semester_overview` AS SELECT 
 1 AS `semester_id`,
 1 AS `year`,
 1 AS `term`,
 1 AS `course_id`,
 1 AS `code`,
 1 AS `title`,
 1 AS `faculty_id`,
 1 AS `faculty_name`,
 1 AS `registered_students`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `faculty_summary`
--

DROP TABLE IF EXISTS `faculty_summary`;
/*!50001 DROP VIEW IF EXISTS `faculty_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `faculty_summary` AS SELECT 
 1 AS `faculty_id`,
 1 AS `username`,
 1 AS `faculty_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `course_registration_summary`
--

DROP TABLE IF EXISTS `course_registration_summary`;
/*!50001 DROP VIEW IF EXISTS `course_registration_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `course_registration_summary` AS SELECT 
 1 AS `student_id`,
 1 AS `semester_id`,
 1 AS `roll_no`,
 1 AS `student_name`,
 1 AS `phone_no`,
 1 AS `level`,
 1 AS `course_id`,
 1 AS `course_code`,
 1 AS `course_title`,
 1 AS `year`,
 1 AS `term`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `student_summary`
--

DROP TABLE IF EXISTS `student_summary`;
/*!50001 DROP VIEW IF EXISTS `student_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `student_summary` AS SELECT 
 1 AS `student_id`,
 1 AS `roll_no`,
 1 AS `student_name`,
 1 AS `phone_no`,
 1 AS `level`,
 1 AS `semester_id`,
 1 AS `course_id`,
 1 AS `course_code`,
 1 AS `course_title`,
 1 AS `year`,
 1 AS `term`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `course_summary`
--

DROP TABLE IF EXISTS `course_summary`;
/*!50001 DROP VIEW IF EXISTS `course_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `course_summary` AS SELECT 
 1 AS `course_id`,
 1 AS `code`,
 1 AS `title`,
 1 AS `credit`,
 1 AS `semester_id`,
 1 AS `faculty_id`,
 1 AS `faculty_name`,
 1 AS `registered_students`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `attendance_summary`
--

/*!50001 DROP VIEW IF EXISTS `attendance_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `attendance_summary` AS select `a`.`attendance_id` AS `attendance_id`,`a`.`student_id` AS `student_id`,`a`.`course_id` AS `course_id`,`a`.`semester_id` AS `semester_id`,`a`.`timestamp` AS `timestamp`,`a`.`status` AS `status`,`a`.`lecture_id` AS `lecture_id`,`l`.`lecture_date` AS `lecture_date`,`l`.`lecture_time` AS `lecture_time`,`cd`.`code` AS `course_code`,`cd`.`title` AS `course_title` from ((`attendance` `a` left join `lectures` `l` on((`a`.`lecture_id` = `l`.`lecture_id`))) left join `course_details` `cd` on((`a`.`course_id` = `cd`.`course_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `lecture_summary`
--

/*!50001 DROP VIEW IF EXISTS `lecture_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `lecture_summary` AS select `l`.`lecture_id` AS `lecture_id`,`l`.`semester_id` AS `semester_id`,`l`.`lecture_date` AS `lecture_date`,`l`.`lecture_time` AS `lecture_time`,`l`.`course_id` AS `course_id`,`cd`.`code` AS `course_code`,`cd`.`title` AS `course_title` from (`lectures` `l` left join `course_details` `cd` on((`l`.`course_id` = `cd`.`course_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `semester_overview`
--

/*!50001 DROP VIEW IF EXISTS `semester_overview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `semester_overview` AS select `smd`.`semester_id` AS `semester_id`,`smd`.`year` AS `year`,`smd`.`term` AS `term`,`cd`.`course_id` AS `course_id`,`cd`.`code` AS `code`,`cd`.`title` AS `title`,`fd`.`faculty_id` AS `faculty_id`,`fd`.`fullname` AS `faculty_name`,count(distinct `cr`.`student_id`) AS `registered_students` from (((`semester_details` `smd` left join `course_details` `cd` on((`smd`.`course_id` = `cd`.`course_id`))) left join `faculty_details` `fd` on((`smd`.`faculty_id` = `fd`.`faculty_id`))) left join `course_registration` `cr` on((`smd`.`semester_id` = `cr`.`semester_id`))) group by `smd`.`semester_id`,`smd`.`year`,`smd`.`term`,`cd`.`course_id`,`cd`.`code`,`cd`.`title`,`fd`.`faculty_id`,`fd`.`fullname` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `faculty_summary`
--

/*!50001 DROP VIEW IF EXISTS `faculty_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `faculty_summary` AS select `fd`.`faculty_id` AS `faculty_id`,`fd`.`username` AS `username`,`fd`.`fullname` AS `faculty_name` from `faculty_details` `fd` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `course_registration_summary`
--

/*!50001 DROP VIEW IF EXISTS `course_registration_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `course_registration_summary` AS select `cr`.`student_id` AS `student_id`,`cr`.`semester_id` AS `semester_id`,`sd`.`roll_no` AS `roll_no`,`sd`.`fullname` AS `student_name`,`sd`.`phone_no` AS `phone_no`,`sd`.`level` AS `level`,`cd`.`course_id` AS `course_id`,`cd`.`code` AS `course_code`,`cd`.`title` AS `course_title`,`smd`.`year` AS `year`,`smd`.`term` AS `term` from (((`course_registration` `cr` left join `student_details` `sd` on((`cr`.`student_id` = `sd`.`student_id`))) left join `semester_details` `smd` on((`cr`.`semester_id` = `smd`.`semester_id`))) left join `course_details` `cd` on((`smd`.`course_id` = `cd`.`course_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `student_summary`
--

/*!50001 DROP VIEW IF EXISTS `student_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `student_summary` AS select `sd`.`student_id` AS `student_id`,`sd`.`roll_no` AS `roll_no`,`sd`.`fullname` AS `student_name`,`sd`.`phone_no` AS `phone_no`,`sd`.`level` AS `level`,`cr`.`semester_id` AS `semester_id`,`cd`.`course_id` AS `course_id`,`cd`.`code` AS `course_code`,`cd`.`title` AS `course_title`,`smd`.`year` AS `year`,`smd`.`term` AS `term` from (((`student_details` `sd` left join `course_registration` `cr` on((`sd`.`student_id` = `cr`.`student_id`))) left join `semester_details` `smd` on((`cr`.`semester_id` = `smd`.`semester_id`))) left join `course_details` `cd` on((`smd`.`course_id` = `cd`.`course_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `course_summary`
--

/*!50001 DROP VIEW IF EXISTS `course_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `course_summary` AS select `cd`.`course_id` AS `course_id`,`cd`.`code` AS `code`,`cd`.`title` AS `title`,`cd`.`credit` AS `credit`,`smd`.`semester_id` AS `semester_id`,`fd`.`faculty_id` AS `faculty_id`,`fd`.`fullname` AS `faculty_name`,count(distinct `cr`.`student_id`) AS `registered_students` from (((`course_details` `cd` left join `semester_details` `smd` on((`cd`.`course_id` = `smd`.`course_id`))) left join `faculty_details` `fd` on((`smd`.`faculty_id` = `fd`.`faculty_id`))) left join `course_registration` `cr` on((`smd`.`semester_id` = `cr`.`semester_id`))) group by `cd`.`course_id`,`cd`.`code`,`cd`.`title`,`cd`.`credit`,`smd`.`semester_id`,`fd`.`faculty_id`,`fd`.`fullname` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Dumping events for database 'attendance'
--

--
-- Dumping routines for database 'attendance'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-06 19:27:32
