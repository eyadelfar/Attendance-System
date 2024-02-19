use attendance;

show tables;

select * from student_details;

INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES 
(1, 1, '2024-02-18 09:00:00', 'Present', 1),
(1, 1, '2024-02-18 09:00:00', 'Present', 2),
(1, 1, '2024-02-18 09:00:00', 'Absent', 3);

INSERT INTO course_details (code, title, credit)
VALUES 
('CS101', 'Programming-1', 3),
('MATH201', 'Calculus', 4),
('ENG101', 'English Composition', 3);

INSERT INTO faculty_details (password, username, fullname)
VALUES 
('password1', 'username1', 'John Doe'),
('password2', 'username2', 'Jane Smith'),
('password3', 'username3', 'Alice Johnson');

INSERT INTO session_details (year, term, start_date, end_date, course_id)
VALUES 
(2024, 'Spring', '2024-01-10', '2024-05-20', 1),
(2024, 'Spring', '2024-01-10', '2024-05-20', 2),
(2024, 'Spring', '2024-01-10', '2024-05-20', 3);


INSERT INTO student_details (roll_no, name, phone_no)
VALUES 
('S001', 'Alice', '123-456-7890'),
('S002', 'Bob', '987-654-3210'),
('S003', 'Charlie', '555-555-5555');

INSERT INTO course_registration (course_id, student_id)
VALUES 
(1, 1),
(1, 2),
(2, 1);


INSERT INTO course_allotment (faculty_id, course_id, session_id)
VALUES 
(1, 1, 1),
(2, 2, 1),
(3, 3, 1);


INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES 
(1, 1, '2024-02-18 09:00:00', 'Present', 1),
(1, 1, '2024-02-18 09:00:00', 'Present', 2),
(1, 1, '2024-02-18 09:00:00', 'Absent', 3);

select * from course_detailsattendance;

select * from session_details;

INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES 

(2, 1, '2024-02-19 09:00:00', 'Present', 1),
(4, 2, '2024-02-19 09:00:00', 'Present', 2),
(1, 2, '2024-02-19 09:00:00', 'Absent', 3),
(3, 1, '2024-02-20 09:00:00', 'Present', 1),
(2, 2, '2024-02-20 09:00:00', 'Present', 2),
(2, 2, '2024-02-20 09:00:00', 'Absent', 3),
-- Add more rows with different dates as needed
(1, 1, '2024-02-21 09:00:00', 'Present', 1),
(2, 1, '2024-02-21 09:00:00', 'Present', 2),
(1, 3, '2024-02-21 09:00:00', 'Absent', 3),
(3, 3, '2024-02-22 09:00:00', 'Present', 1),
(3, 3, '2024-02-22 09:00:00', 'Present', 2),
(3, 2, '2024-02-22 09:00:00', 'Absent', 3),
-- Ad more rows with different dates as needed
(1, 3, '2024-02-23 09:00:00', 'Present', 1),
(3, 1, '2024-02-23 09:00:00', 'Present', 2),
(1, 1, '2024-02-23 09:00:00', 'Absent', 3),
(3, 2, '2024-02-24 09:00:00', 'Present', 1),
(2, 2, '2024-02-24 09:00:00', 'Present', 2),
(3, 2, '2024-02-24 09:00:00', 'Absent', 3),
-- Add more rows with different dates as needed
(3, 1, '2024-02-25 09:00:00', 'Present', 1),
(2, 3, '2024-02-25 09:00:00', 'Present', 2),
(1, 3, '2024-02-25 09:00:00', 'Absent', 3),
-- Add more rows with different dates as needed
(1, 2, '2024-02-26 09:00:00', 'Present', 1),
(2, 1, '2024-02-26 09:00:00', 'Present', 2),
(3, 2, '2024-02-26 09:00:00', 'Absent', 3),
(2, 2, '2024-02-17 09:00:00', 'Present', 1),
(1, 3, '2024-02-17 09:00:00', 'Present', 2),
(3, 2, '2024-02-17 09:00:00', 'Absent', 3),
-- Additional rows with slightly different timestamps
(3, 2, '2024-02-16 09:00:00', 'Present', 1),
(3, 1, '2024-02-16 09:00:00', 'Present', 2),
(1, 3, '2024-02-16 09:00:00', 'Absent', 3),
(2, 3, '2024-02-15 09:00:00', 'Present', 1),
(2, 3, '2024-02-15 09:00:00', 'Present', 2),
(3, 1, '2024-02-15 09:00:00', 'Absent', 3),
-- Ad more rows with different dates as needed
(1, 1, '2024-02-14 09:00:00', 'Present', 1),
(3, 2, '2024-02-14 09:00:00', 'Present', 2),
(2, 2, '2024-02-14 09:00:00', 'Absent', 3),
(3, 2, '2024-02-13 09:00:00', 'Present', 1),
(1, 1, '2024-02-13 09:00:00', 'Present', 2),
(2, 3, '2024-02-13 09:00:00', 'Absent', 3),
-- Add more rows with different dates as needed
(2, 1, '2024-02-12 09:00:00', 'Present', 1),
(2, 3, '2024-02-12 09:00:00', 'Present', 2),
(3, 3, '2024-02-12 09:00:00', 'Absent', 3),
-- Add more rows with different dates as needed
(1, 1, '2024-02-11 09:00:00', 'Present', 1),
(1, 1, '2024-02-11 09:00:00', 'Present', 2),
(1, 1, '2024-02-11 09:00:00', 'Absent', 3);


-- Insert data into course_details table
INSERT INTO course_details (code, title, credit)
VALUES 
    ('C001', 'Mathematics', 3),
    ('C002', 'English', 4),
    ('C003', 'Science', 3);

-- Insert data into faculty_details table
INSERT INTO faculty_details (password, username, fullname)
VALUES 
    ('password1', 'username1', 'John Doe'),
    ('password2', 'username2', 'Jane Smith');

-- Insert data into student_details table
INSERT INTO student_details (roll_no, name, phone_no)
VALUES 
    ('S001', 'Alice Johnson', '123-456-7890'),
    ('S002', 'Bob Smith', '234-567-8901');

-- Insert data into session_details table
INSERT INTO session_details (year, term, start_date, end_date, course_id)
VALUES 
    (2024, 'Spring', '2024-01-01', '2024-05-01', 1),
    (2024, 'Spring', '2024-01-01', '2024-05-01', 2),
    (2024, 'Spring', '2024-01-01', '2024-05-01', 3);

-- Insert data into tables with foreign key dependencies

-- Insert data into course_registration table
INSERT INTO course_registration (course_id, student_id)
VALUES 
    (1, 1),
    (2, 1),
    (3, 2);

-- Insert data into course_allotment table
INSERT INTO course_allotment (faculty_id, course_id, session_id)
VALUES 
    (1, 1, 1),
    (2, 2, 1),
    (1, 3, 1);

-- Insert data into attendance table
INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES 
    (1, 1, '2024-02-18 09:00:00', 'Present', 1),
    (1, 1, '2024-02-18 09:00:00', 'Present', 2),
    (1, 1, '2024-02-18 09:00:00', 'Absent', 2),
    -- Insert more rows as needed
    (2, 2, '2024-02-19 09:00:00', 'Present', 1),
    (2, 2, '2024-02-19 09:00:00', 'Absent', 2);






-- Insert 10 more rows into course_details table
INSERT INTO course_details (code, title, credit)
VALUES 
    ('C004', 'History', 3),
    ('C005', 'Physics', 4),
    ('C006', 'Chemistry', 3),
    ('C007', 'Biology', 4),
    ('C008', 'Computer Science', 3),
    ('C009', 'Literature', 3),
    ('C010', 'Art', 2),
    ('C011', 'Music', 2),
    ('C012', 'Geography', 3),
    ('C013', 'Economics', 4);

-- Insert 10 more rows into faculty_details table
INSERT INTO faculty_details (password, username, fullname)
VALUES 
    ('password3', 'username3', 'Emily Brown'),
    ('password4', 'username4', 'David Wilson'),
    ('password5', 'username5', 'Emma Martinez'),
    ('password6', 'username6', 'Michael Anderson'),
    ('password7', 'username7', 'Sophia Garcia'),
    ('password8', 'username8', 'Daniel Taylor'),
    ('password9', 'username9', 'Olivia Hernandez'),
    ('password10', 'username10', 'William Lopez'),
    ('password11', 'username11', 'Ava Adams'),
    ('password12', 'username12', 'James Rivera');

-- Insert 10 more rows into student_details table
INSERT INTO student_details (roll_no, name, phone_no)
VALUES 
    ('S003', 'Ethan Miller', '345-678-9012'),
    ('S004', 'Sophia Moore', '456-789-0123'),
    ('S005', 'Michael Johnson', '567-890-1234'),
    ('S006', 'Isabella Brown', '678-901-2345'),
    ('S007', 'Mason Jones', '789-012-3456'),
    ('S008', 'Amelia Davis', '890-123-4567'),
    ('S009', 'Jacob Wilson', '901-234-5678'),
    ('S010', 'Olivia Taylor', '012-345-6789'),
    ('S011', 'Alexander Martinez', '123-456-7890'),
    ('S012', 'Ava Anderson', '234-567-8901');

-- Insert 10 more rows into session_details table
INSERT INTO session_details (year, term, start_date, end_date, course_id)
VALUES 
    (2024, 'Fall', '2024-09-01', '2024-12-15', 4),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 5),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 6),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 7),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 8),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 9),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 10),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 11),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 12),
    (2024, 'Fall', '2024-09-01', '2024-12-15', 13);

-- Insert 10 more rows into course_registration table
INSERT INTO course_registration (course_id, student_id)
VALUES 
    (4, 3),
    (5, 4),
    (6, 5),
    (7, 6),
    (8, 7),
    (9, 8),
    (10, 9),
    (11, 10),
    (12, 11),
    (13, 12);

-- Insert 10 more rows into course_allotment table
INSERT INTO course_allotment (faculty_id, course_id, session_id)
VALUES 
    (3, 4, 2),
    (4, 5, 2),
    (5, 6, 2),
    (6, 7, 2),
    (7, 8, 2),
    (8, 9, 2),
    (9, 10, 2),
    (10, 11, 2),
    (11, 12, 2),
    (12, 13, 2);

-- Insert 10 more rows into attendance table
INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES 
    (4, 2, '2024-09-01 09:00:00', 'Present', 3),
    (4, 2, '2024-09-01 09:00:00', 'Absent', 4);
----------------------
------------





-- Insert 10 more different rows into course_details table
INSERT INTO course_details (code, title, credit)
VALUES 
    ('C014', 'Psychology', 3),
    ('C015', 'Sociology', 3),
    ('C016', 'Anthropology', 3),
    ('C017', 'Political Science', 3),
    ('C018', 'Philosophy', 3),
    ('C019', 'Statistics', 4),
    ('C020', 'Engineering', 4),
    ('C021', 'Medicine', 5),
    ('C022', 'Dentistry', 5),
    ('C023', 'Architecture', 4);

-- Insert 10 more different rows into faculty_details table
INSERT INTO faculty_details (password, username, fullname)
VALUES 
    ('password13', 'username13', 'Sophia Moore'),
    ('password14', 'username14', 'Michael Johnson'),
    ('password15', 'username15', 'Isabella Brown'),
    ('password16', 'username16', 'Mason Jones'),
    ('password17', 'username17', 'Amelia Davis'),
    ('password18', 'username18', 'Jacob Wilson'),
    ('password19', 'username19', 'Olivia Taylor'),
    ('password20', 'username20', 'Alexander Martinez'),
    ('password21', 'username21', 'Ava Anderson'),
    ('password22', 'username22', 'Ethan Miller');

-- Insert 10 more different rows into student_details table
INSERT INTO student_details (roll_no, name, phone_no)
VALUES 
    ('S013', 'Sophia Moore', '345-678-9012'),
    ('S014', 'Michael Johnson', '456-789-0123'),
    ('S015', 'Isabella Brown', '567-890-1234'),
    ('S016', 'Mason Jones', '678-901-2345'),
    ('S017', 'Amelia Davis', '789-012-3456'),
    ('S018', 'Jacob Wilson', '890-123-4567'),
    ('S019', 'Olivia Taylor', '901-234-5678'),
    ('S020', 'Alexander Martinez', '012-345-6789'),
    ('S021', 'Ava Anderson', '123-456-7890'),
    ('S022', 'Ethan Miller', '234-567-8901');

-- Insert 10 more different rows into session_details table
INSERT INTO session_details (year, term, start_date, end_date, course_id)
VALUES 
    (2025, 'Spring', '2025-01-01', '2025-05-01', 14),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 15),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 16),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 17),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 18),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 19),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 20),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 21),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 22),
    (2025, 'Spring', '2025-01-01', '2025-05-01', 23);

-- Insert 10 more different rows into course_registration table
INSERT INTO course_registration (course_id, student_id)
VALUES 
    (14, 13),
    (15, 14),
    (16, 15),
    (17, 16),
    (18, 17),
    (19, 18),
    (20, 19),
    (21, 20),
    (22, 21),
    (23, 22);

-- Insert 10 more different rows into course_allotment table
INSERT INTO course_allotment (faculty_id, course_id, session_id)
VALUES 
    (13, 14, 3),
    (14, 15, 3),
    (15, 16, 3),
    (16, 17, 3),
    (17, 18, 3),
    (18, 19, 3),
    (19, 20, 3),
    (20, 21, 3),
    (21, 22, 3),
    (22, 23, 3);

-- Insert 10 more different rows into attendance table
INSERT INTO attendance (course_id, session_id, timestamp, status, student_id)
VALUES 
    (14, 3, '2025-01-01 09:00:00', 'Present', 13),
    (14, 3, '2025-01-01 09:00:00', 'Absent', 14),
    (15, 3, '2025-01-01 09:00:00', 'Present', 15),
    (15, 3, '2025-01-01 09:00:00', 'Present', 16),
    (16, 3, '2025-01-01 09:00:00', 'Absent', 17),
    (16, 3, '2025-01-01 09:00:00', 'Present', 18),
    (17, 3, '2025-01-01 09:00:00', 'Present', 19),
    (17, 3, '2025-01-01 09:00:00', 'Absent', 20),
    (18, 3, '2025-01-01 09:00:00', 'Present', 21);

select * from attendance;
select * from student_details;
select * from course_allotment;
select * from course_details;
select * from course_registration;
select * from faculty_details;
select * from session_details;