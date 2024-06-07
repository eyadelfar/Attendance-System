import React, { useState, useEffect } from 'react';
import './CourseList.css';
import Edit from '../../../../pics/edit.png';
import Delete from '../../../../pics/delete.png';
import plus from '../../../../pics/plus.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

function CourseList(props) {
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

  const handleEdit = (course) => {
    // Save the course.semester_id in local storage
    localStorage.setItem('semester_id', course.semester_id);
    // Redirect to the new page
    window.location.href = '/CourseEdit';
  };

  const handleLecture = (course) => {
    // Save the course.semester_id in local storage
    localStorage.setItem('semester_id', course.semester_id);
    localStorage.setItem('course_id', course.course_id);
    // Redirect to the new page
    window.location.href = '/LectureList';
  };

  const handleDeleteSemester = async (semesterId) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/semester/${semesterId}`,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });
      props.onDeleteSuccess();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="course-list">
      <div className="course-header">
        <h1>Courses</h1>
        <div>
          <a href="/CourseCreate">
            <button className="create-course">
              <img className="plus-icon" src={plus} alt={'image'} />
              Create Course
            </button>
          </a>
        </div>
      </div>
      <table className="course-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>No. Registerations</th>
            <th>Professor Name</th>
            <th>Lecture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="body-table-course">
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.code}</td>
              <td>{course.num_registered}</td>
              <td>{course.fullname}</td>
              <td>
              <a  onClick={() => handleLecture(course)}>
                  <button className="button-course">
                    Go to Lecture
                  </button>
                </a>
              </td>
              <td>
                <a href="#" onClick={() => handleEdit(course)}>
                  <img className="pen-icon-lecture" src={Edit} alt={'edit-image'} />
                </a>
                <button
                className="delete-course"
                onClick={() => {
                  handleDeleteSemester(course.semester_id);
                  window.location.reload();
                }}
              >
                <img className="del-icon-course" src={Delete} />
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;