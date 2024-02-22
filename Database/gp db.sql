use attendance;

show tables;

select * from student_details;

INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES (1, 1, '2024-02-18 09:00:00', 'Absent', 3);

INSERT INTO course_details (code, title, credit)
VALUES ('ENG101', 'English Composition', 3);

INSERT INTO faculty_details (password, username, fullname)
VALUES ('password3', 'username3', 'Alice Johnson');

INSERT INTO session_details (year, term, start_date, end_date, course_id)
VALUES (2024, 'Spring', '2024-01-10', '2024-05-20', 3);


INSERT INTO student_details (roll_no, name, phone_no)
VALUES ('S024', 'swilam', '555-699-5555');

INSERT INTO course_registration (course_id, student_id)
VALUES (2, 1);


INSERT INTO course_allotment (faculty_id, course_id, session_id)
VALUES (3, 3, 1);

alter table course_allotment
add column allotment_date date;
desc attendance;
select * from attendance;
select * from student_details;
select * from course_allotment;
select * from course_details;
select * from course_registration;
select * from faculty_details;
select * from session_details;

-- Trigger for attendance
DELIMITER //
CREATE TRIGGER attendance_insert_trigger
AFTER INSERT
ON attendance
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('attendance', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER attendance_update_trigger
AFTER UPDATE
ON attendance
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('attendance', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER attendance_delete_trigger
AFTER DELETE
ON attendance
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('attendance', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

-- Trigger for student_details
DELIMITER //
CREATE TRIGGER student_details_insert_trigger
AFTER INSERT
ON student_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('student_details', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER student_details_update_trigger
AFTER UPDATE
ON student_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('student_details', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER student_details_delete_trigger
AFTER DELETE
ON student_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('student_details', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

-- Trigger for course_allotment
DELIMITER //
CREATE TRIGGER course_allotment_insert_trigger
AFTER INSERT
ON course_allotment
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_allotment', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER course_allotment_update_trigger
AFTER UPDATE
ON course_allotment
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_allotment', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER course_allotment_delete_trigger
AFTER DELETE
ON course_allotment
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_allotment', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

-- Trigger for course_details
DELIMITER //
CREATE TRIGGER course_details_insert_trigger
AFTER INSERT
ON course_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_details', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER course_details_update_trigger
AFTER UPDATE
ON course_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_details', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER course_details_delete_trigger
AFTER DELETE
ON course_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_details', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

-- Trigger for course_registration
DELIMITER //
CREATE TRIGGER course_registration_insert_trigger
AFTER INSERT
ON course_registration
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_registration', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER course_registration_update_trigger
AFTER UPDATE
ON course_registration
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_registration', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER course_registration_delete_trigger
AFTER DELETE
ON course_registration
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('course_registration', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

-- Trigger for faculty_details
DELIMITER //
CREATE TRIGGER faculty_details_insert_trigger
AFTER INSERT
ON faculty_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('faculty_details', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER faculty_details_update_trigger
AFTER UPDATE
ON faculty_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('faculty_details', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER faculty_details_delete_trigger
AFTER DELETE
ON faculty_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('faculty_details', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;


-- Trigger for session_details
DELIMITER //
CREATE TRIGGER session_details_insert_trigger
AFTER INSERT
ON session_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'INSERT', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER session_details_update_trigger
AFTER UPDATE
ON session_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER session_details_delete_trigger
AFTER DELETE
ON session_details
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

CREATE TABLE data_changes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_name VARCHAR(255) NOT NULL,
    event_type ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



insert into