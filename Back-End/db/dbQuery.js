// database connection
const connect = require ("./dbConnection");

let query = '';

module.exports = class DBQuery{

    constructor(){
        this.query = null;
    };

    async select(tableName, ...columns) {
        let columnNames = columns.length > 0 ? columns.join(', ') : '*';
        this.query = `SELECT ${columnNames} FROM ${tableName}`;
        return this;
    }

    async insert(tableName, columns = {}) {
        let columnNames = Object.keys(columns).join(', ');
        let columnValues = Object.values(columns).join("', '");
        let updates = Object.keys(columns).map(column => `${column} = VALUES(${column})`).join(', ');

        this.query = `INSERT INTO ${tableName} (${columnNames}) VALUES ('${columnValues}') ON DUPLICATE KEY UPDATE ${updates}`;
        return this;
    }

    async update(tableName, columns = {}) {
        let updates = [];
        for (let column in columns) {
            updates.push(`${column} = '${columns[column]}'`);
        }
        this.query = `UPDATE ${tableName} SET ${updates.join(', ')}`;
        return this;
    }

    async delete(tableName) {
        this.query = `DELETE FROM ${tableName}`;
        return this;
    }

    async where(columns){
        let conditions = [];
        for (let column in columns) {
            conditions.push(`${column} = '${columns[column]}'`);
        }
        this.query += ` WHERE ${conditions.join(' AND ')}`;
        return this;
    }

    async orderBy(column, ordering = ''){
        this.query += ` ORDER BY ${column} ${ordering}`;       
        return this;
    }

    async joinAllCourseDetails(){
        this.query = `SELECT 
                        s.semester_id,
                        c.title, 
                        c.code, 
                        f.fullname, 
                        COUNT(r.student_id) AS num_registered,
                        f.faculty_id,
                        s.term,
                        s.year,
                        c.course_id
                    FROM 
                        semester_details s 
                    JOIN 
                        course_details c ON s.course_id = c.course_id 
                    JOIN 
                        faculty_details f ON s.faculty_id = f.faculty_id 
                    LEFT JOIN 
                        course_registration r ON s.semester_id = r.semester_id 
                    GROUP BY 
                        s.semester_id
                    ORDER BY
                        s.year;` ;        
        return this;
    }

    async joinCourseDetails(semester_id){
        this.query = `SELECT 
                        s.semester_id,
                        c.title, 
                        c.code, 
                        f.fullname, 
                        COUNT(r.student_id) AS num_registered,
                        f.faculty_id,
                        s.term,
                        s.year
                    FROM 
                        semester_details s 
                    JOIN 
                        course_details c ON s.course_id = c.course_id 
                    JOIN 
                        faculty_details f ON s.faculty_id = f.faculty_id 
                    LEFT JOIN  
                        course_registration r ON s.semester_id = r.semester_id 
                    WHERE
                        s.semester_id = ${semester_id}
                    GROUP BY 
                        s.semester_id;` ;        
        return this;
    }
    
    async joinAllRegisteredCourses(){
        this.query = `SELECT 
                        c.title, 
                        c.code,
                        c.course_id,
                        f.fullname as professor_name, 
	                    st.fullname as student_name,
                        st.roll_no,
                        st.student_id,
                        sm.semester_id
                    FROM 
                        student_details st
                    JOIN 
                        course_registration r ON st.student_id = r.student_id 
                    JOIN 
                        semester_details sm ON sm.semester_id = r.semester_id 
                    JOIN 
                        faculty_details f ON f.faculty_id = sm.faculty_id 
                    JOIN 
                        course_details c ON c.course_id = sm.course_id
                    ORDER BY
                        sm.year;` ;        
        return this;
    }

    async joinRegisteredCourses(student_id){
        this.query = `SELECT 
                        c.title, 
                        c.code, 
                        c.course_id,
                        f.fullname, 
                        sm.semester_id
                    FROM 
                        student_details st
                    JOIN 
                        course_registration r ON st.student_id = r.student_id 
                    JOIN 
                        semester_details sm ON sm.semester_id = r.semester_id 
                    JOIN 
                        faculty_details f ON f.faculty_id = sm.faculty_id 
                    JOIN 
                        course_details c ON c.course_id = sm.course_id 
                    WHERE 
                        st.student_id = ${student_id}
                    ORDER BY
                            s.year;` ;        
        return this;
    }

    async joinAttendance(student_id){
        this.query = `SELECT 
                        a.*, 
                        l.*
                    FROM 
                        attendance a
                    JOIN 
                        lectures l ON a.lecture_id = l.lecture_id 
                    JOIN 
                        student_details s ON a.student_id = s.student_id 
                    WHERE
                        s.student_id = ${student_id};` ;        
        return this;
    }
    
    async joinLectureDetailsBySemester(semester_id){
        this.query = `SELECT 
                        l.*,
                        c.*
                    FROM 
                        lectures l 
                    JOIN 
                        course_details c ON l.course_id = c.course_id 
                    WHERE
                        l.semester_id = ${semester_id};`;

        return this;
    }

    async joinLectureDetails(lecture_id){
        this.query = `SELECT 
                        l.*,
                        c.title,
                        c.code
                    FROM 
                        lectures l 
                    JOIN 
                        course_details c ON l.course_id = c.course_id 
                    
                    WHERE
                        l.lecture_id = ${lecture_id};`;

        return this;
    }
    
    async execute(){
        return new Promise((resolve, reject) => {
            if (!this.query){
                reject(new Error('No query specified'));
            }
            connect.query(this.query,
                (errors, results, fields)=>{
                    if(errors)
                        reject (errors) ;
                    else 
                        resolve (results);
                }
            );
        });    
    }
};