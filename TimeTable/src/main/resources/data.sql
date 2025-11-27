-- Courses

INSERT INTO
    courses (
        course_name,
        faculty,
        room_no,
        specialization
    )
SELECT 'Introduction to Programming', 'Dr. Anil Kumar', 'R103', 'Computer Science'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM courses
        WHERE
            course_name = 'Introduction to Programming'
    );

INSERT INTO
    courses (
        course_name,
        faculty,
        room_no,
        specialization
    )
SELECT 'Data Structures', 'Dr. Priya Sharma', 'R104', 'Computer Science'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM courses
        WHERE
            course_name = 'Data Structures'
    );

INSERT INTO
    courses (
        course_name,
        faculty,
        room_no,
        specialization
    )
SELECT 'Algorithms', 'Dr. Rajesh Mehta', 'R103', 'Computer Science'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM courses
        WHERE
            course_name = 'Algorithms'
    );

INSERT INTO
    courses (
        course_name,
        faculty,
        room_no,
        specialization
    )
SELECT 'Database Management Systems', 'Dr. Neha Gupta', 'R104', 'Computer Science'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM courses
        WHERE
            course_name = 'Database Management Systems'
    );

INSERT INTO
    courses (
        course_name,
        faculty,
        room_no,
        specialization
    )
SELECT 'Operating Systems', 'Dr. Sanjay Patil', 'R203', 'Computer Science'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM courses
        WHERE
            course_name = 'Operating Systems'
    );

INSERT INTO
    courses (
        course_name,
        faculty,
        room_no,
        specialization
    )
SELECT 'Machine Learning', 'Andrew Ng', 'R301', 'Computer Science'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM courses
        WHERE
            course_name = 'Machine Learning'
    );

-- Timeslot inserts
-- Monday slots
INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Monday', '08:00', '09:30'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Monday'
            AND start_time = '08:00'
            AND end_time = '09:30'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Monday', '09:30', '11:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Monday'
            AND start_time = '09:30'
            AND end_time = '11:00'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Monday', '11:00', '13:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Monday'
            AND start_time = '11:00'
            AND end_time = '13:00'
    );

-- Tuesday slots
INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Tuesday', '08:00', '09:30'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Tuesday'
            AND start_time = '08:00'
            AND end_time = '09:30'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Tuesday', '09:30', '11:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Tuesday'
            AND start_time = '09:30'
            AND end_time = '11:00'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Tuesday', '11:00', '13:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Tuesday'
            AND start_time = '11:00'
            AND end_time = '13:00'
    );

-- Wednesday slots
INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Wednesday', '08:00', '09:30'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Wednesday'
            AND start_time = '08:00'
            AND end_time = '09:30'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Wednesday', '09:30', '11:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Wednesday'
            AND start_time = '09:30'
            AND end_time = '11:00'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Wednesday', '11:00', '13:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Wednesday'
            AND start_time = '11:00'
            AND end_time = '13:00'
    );

-- Thursday slots
INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Thursday', '08:00', '09:30'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Thursday'
            AND start_time = '08:00'
            AND end_time = '09:30'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Thursday', '09:30', '11:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Thursday'
            AND start_time = '09:30'
            AND end_time = '11:00'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Thursday', '11:00', '13:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Thursday'
            AND start_time = '11:00'
            AND end_time = '13:00'
    );

-- Friday slots
INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Friday', '08:00', '09:30'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Friday'
            AND start_time = '08:00'
            AND end_time = '09:30'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Friday', '09:30', '11:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Friday'
            AND start_time = '09:30'
            AND end_time = '11:00'
    );

INSERT INTO
    timeslot (
        day_of_week,
        start_time,
        end_time
    )
SELECT 'Friday', '11:00', '13:00'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM timeslot
        WHERE
            day_of_week = 'Friday'
            AND start_time = '11:00'
            AND end_time = '13:00'
    );

-- "Introduction to Programming" (Course ID: 1)
-- Monday 08:00-09:30 (Timeslot ID: 1)
-- Wednesday 11:00-13:00 (Timeslot ID: 8)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (1, 1);
-- Slot 1 (Monday 08:00-09:30)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (1, 8);
-- Slot 2 (Wednesday 11:00-13:00)

-- "Data Structures" (Course ID: 2)
-- Monday 09:30-11:00 (Timeslot ID: 2)
-- Thursday 08:00-09:30 (Timeslot ID: 10)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (2, 2);
-- Slot 1 (Monday 09:30-11:00)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (2, 10);
-- Slot 2 (Thursday 08:00-09:30)

-- "Algorithms" (Course ID: 3)
-- Tuesday 08:00-09:30 (Timeslot ID: 4)
-- Friday 11:00-13:00 (Timeslot ID: 15)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (3, 4);
-- Slot 1 (Tuesday 08:00-09:30)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (3, 15);
-- Slot 2 (Friday 11:00-13:00)

-- "Database Management Systems" (Course ID: 4)
-- Tuesday 09:30-11:00 (Timeslot ID: 5)
-- Friday 09:30-11:00 (Timeslot ID: 14)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (4, 5);
-- Slot 1 (Tuesday 09:30-11:00)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (4, 14);
-- Slot 2 (Friday 09:30-11:00)

-- "Operating Systems" (Course ID: 5)
-- Monday 11:00-13:00 (Timeslot ID: 2)
-- Wednesday 09:30-11:00 (Timeslot ID: 7)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (5, 2);
-- Slot 1 (Monday 11:00-13:00)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (5, 7);
-- Slot 2 (Wednesday 09:30-11:00)

-- "Machine Learning" (Course ID: 6)
-- Wednesday 11:00-13:00 (Timeslot ID: 9)
-- Thursday 09:30-11:00 (Timeslot ID: 11)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (6, 9);
-- Slot 1 (Wednesday 11:00-13:00)
INSERT IGNORE INTO
    course_timeslot (course_id, timeslot_id)
VALUES (6, 11);
-- Slot 2 (Thursday 09:30-11:00)

-- ==========================================
-- USER TO BE MODIFIED
-- REPLACE 'YOUR_EMAIL_HERE' WITH YOUR GOOGLE EMAIL
-- ==========================================
INSERT INTO
    students (first_name, last_name, email)
SELECT 'Deeksha', 'Jain', 'deeksha.jain2008@gmail.com'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM students
        WHERE
            email = 'deeksha.jain2008@gmail.com'
    );

-- Register Deeksha for courses (Intro to Programming, Algorithms, OS)
INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 1
FROM students s
WHERE
    s.email = 'deeksha.jain2008@gmail.com';

INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 3
FROM students s
WHERE
    s.email = 'deeksha.jain2008@gmail.com';

INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 5
FROM students s
WHERE
    s.email = 'deeksha.jain2008@gmail.com';

INSERT INTO
    students (first_name, last_name, email)
SELECT 'DJ', 'Jain', 'deekshajain033@gmail.com'
WHERE
    NOT EXISTS (
        SELECT 1
        FROM students
        WHERE
            email = 'deekshajain033@gmail.com'
    );

-- Register deekshajain033 for courses (Algorithms, Operating Systems, Computer Networks)
INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 2
FROM students s
WHERE
    s.email = 'deekshajain033@gmail.com';

INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 4
FROM students s
WHERE
    s.email = 'deekshajain033@gmail.com';

INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 3
FROM students s
WHERE
    s.email = 'deekshajain033@gmail.com';

INSERT IGNORE INTO
    student_courses (student_id, course_id)
SELECT s.id, 6
FROM students s
WHERE
    s.email = 'deekshajain033@gmail.com';