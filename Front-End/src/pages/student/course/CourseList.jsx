import React, { useState, useEffect } from 'react';
import'./CourseList.css'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'


 function CourseList() {
  const [courses, setCourses] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/semester/courseDetails', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setCourses(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

      const handleLecture = (course) => {
        // Save the course.semester_id in local storage
        localStorage.setItem('semester_id', course.semester_id);
        localStorage.setItem('course_id', course.course_id);
        // Redirect to the new page
        window.location.href = '/LectureListStudent';
      };
    
    return (
      <div className="course-list-student">
       <div className='course-header-student'>
       <h1>Courses</h1>
        </div>
        
        <table className='course-table-student'>
    <thead>
      <tr>
        <th>Title</th>
        <th>Code</th>
        <th>Professor Name</th>
        <th>Lectures</th>
      </tr>
    </thead>
          <tbody className='body-table-course-student'>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.title}</td>
            <td>{course.code}</td>
            <td>{course.fullname}</td>
            <td> 
            <a href="#" onClick={() => handleLecture(course)}>
              <button className='button-course-student'>
                Go to Lecture
              </button> 
              </a>
              </td>
          </tr>
          ))}
             </tbody>
         </table>
        </div>
    );
  }
  
  export default CourseList;