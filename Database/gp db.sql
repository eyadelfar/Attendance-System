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
VALUES ('S025', 'swilam', '555-699-5555');

INSERT INTO course_registration (course_id, student_id)
VALUES (2, 1);
-- more automated
INSERT INTO course_allotment (faculty_id, course_id, session_id)
VALUES (3, 3, 1);

alter table student_details
drop column image;




set foreign_key_checks=0;
select * from faces;
ALTER TABLE session_details
drop table faces;
set foreign_key_checks=0;

ALTER TABLE student_details
CHANGE name fullname varchar(255);
set foreign_key_checks=1;
desc attendance;

ALTER TABLE lectures
ADD COLUMN course_id INT;
ALTER TABLE lectures
ADD CONSTRAINT fk_lectures_course_id FOREIGN KEY (course_id) REFERENCES course_details(course_id);

ALTER TABLE semester_details
ADD COLUMN faculty_id INT,
ADD CONSTRAINT fk_faculty_id FOREIGN KEY (faculty_id) REFERENCES faculty_details(faculty_id);

DROP TABLE course_allotment;


ALTER TABLE course_registration
ADD COLUMN semester_id INT, -- Assuming INT as datatype, adjust if necessary
ADD CONSTRAINT fk_semester_id FOREIGN KEY (semester_id) REFERENCES semester_details(semester_id);



ALTER TABLE course_registration
DROP column course_id;

ALTER TABLE course_registration
drop foreign key fk_course_registration_course_id;
Error Code: 1828. Cannot drop column 'course_id': needed in a foreign key constraint 'fk_course_registration_course_id'

ADD PRIMARY KEY (student_id, semester_id);

SELECT CONSTRAINT_NAME, TABLE_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE REFERENCED_TABLE_NAME = 'course_registration';

-- Step 3: Add new composite primary key constraint
ALTER TABLE course_registration
drop column course_id;

select * from student_details;
select * from course_details;
select * from course_registration;
select * from faculty_details;
select * from semester_details;
select * from attendance;
select * from lectures;
select * from data_changes;
desc lectures;
ALTER TABLE faces MODIFY COLUMN encoding LONGBLOB;
ALTER TABLE attendance MODIFY COLUMN timestamp datetime;

ALTER TABLE course_allotment
RENAME COLUMN session_id TO semester_id;

ALTER TABLE course_registration
ADD PRIMARY KEY (semester_id, student_id);

select * from data_changes;
alter table semester_details
drop session_time;

CREATE TABLE lectures (
  lecture_id INT PRIMARY KEY,
  session_id INT,
  lecture_date DATE,
  lecture_time TIME,
  FOREIGN KEY (session_id) REFERENCES session_details(session_id)
);

desc semester_details;


ALTER TABLE semester_details
DROP FOREIGN KEY fk_course_session_id,
DROP FOREIGN KEY fk_faculty_id;

-- Recreate foreign key constraints with ON DELETE and ON UPDATE CASCADE
ALTER TABLE semester_details
ADD CONSTRAINT fk_course_session_id FOREIGN KEY (course_id) REFERENCES course_details(course_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE semester_details
ADD CONSTRAINT fk_faculty_id FOREIGN KEY (faculty_id) REFERENCES faculty_details(faculty_id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Drop existing foreign key constraints
ALTER TABLE attendance
DROP FOREIGN KEY fk_attendance_course_id,
DROP FOREIGN KEY fk_attendance_lecture,
DROP FOREIGN KEY fk_attendance_session_id,
DROP FOREIGN KEY fk_attendance_student_id,
DROP FOREIGN KEY fk_session_id,
DROP FOREIGN KEY fk_student_id;

-- Drop existing foreign key constraints
ALTER TABLE lectures
DROP FOREIGN KEY fk_lectures_course_id,
DROP FOREIGN KEY lectures_ibfk_1;

-- Recreate foreign key constraints with ON DELETE and ON UPDATE CASCADE
ALTER TABLE lectures
ADD CONSTRAINT fk_lectures_course_id FOREIGN KEY (course_id) REFERENCES course_details(course_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE lectures
ADD CONSTRAINT lectures_ibfk_1 FOREIGN KEY (semester_id) REFERENCES semester_details(semester_id) ON DELETE CASCADE ON UPDATE CASCADE;



ALTER TABLE semester_details
ADD CONSTRAINT fk_semester_faculty_details
FOREIGN KEY (faculty_id)
REFERENCES faculty_details(faculty_id)
ON DELETE CASCADE
ON UPDATE CASCADE;










-- Create a trigger to set default values for lecture_date and lecture_time
DELIMITER //
CREATE TRIGGER set_default_lecture_date_time BEFORE INSERT ON lectures
FOR EACH ROW
BEGIN
    IF NEW.lecture_date IS NULL THEN
        SET NEW.lecture_date = CURRENT_DATE;
    END IF;
    IF NEW.lecture_time IS NULL THEN
        SET NEW.lecture_time = CURRENT_TIME;
    END IF;
END;
//
DELIMITER ;





RENAME TABLE session_details TO semester_details;

ALTER TABLE session_details
ADD COLUMN lecture_id INT;


ALTER TABLE attendance
MODIFY COLUMN status ENUM('joined', 'left');

ALTER TABLE attendance
ADD CONSTRAINT fk_attendance_lecture FOREIGN KEY (lecture_id) REFERENCES lectures(lecture_id);

truncate attendance;

CREATE INDEX idx_attendance_course_id ON attendance (course_id);

CREATE INDEX idx_attendance_student_id ON attendance (student_id);
CREATE INDEX idx_attendance_session_id ON attendance (session_id);





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
CREATE TRIGGER lectures_delete_trigger
AFTER DELETE
ON lectures
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('session_details', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER lectures_update_trigger
AFTER UPDATE
ON lectures
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('lectures', 'UPDATE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;
DELIMITER //
CREATE TRIGGER lectures_delete_trigger
AFTER DELETE
ON lectures
FOR EACH ROW
BEGIN
    INSERT INTO data_changes (table_name, event_type, event_timestamp)
    VALUES ('lectures', 'DELETE', CURRENT_TIMESTAMP);
END;
//
DELIMITER ;

CREATE TABLE data_changes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_name VARCHAR(255) NOT NULL,
    event_type ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
