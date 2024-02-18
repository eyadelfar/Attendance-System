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

select * from attendance;