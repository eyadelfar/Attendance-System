import React, { useState, useEffect } from 'react';
import './CourseList.css';
import Edit from '../../../../pics/edit.png';
import Delete from '../../../../pics/delete.png';
import plus from '../../../../pics/plus.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

function DbCourseList(props) {
  const [courses, setCourses] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/courses', {
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
    localStorage.setItem('course_id', course.course_id);
    // Redirect to the new page
    window.location.href = '/DbCourseEdit';
  };

  // const handleLecture = (course) => {
  //   // Save the course.semester_id in local storage
  //   localStorage.setItem('semester_id', course.semester_id);
  //   localStorage.setItem('course_id', course.course_id);
  //   // Redirect to the new page
  //   window.location.href = '/LectureList';
  // };

  const handleDeleteSemester = async (courseId) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/courses/${courseId}`,
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
          <a href="/DbCourseCreate">
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
            <th>Course_id</th>
            <th>Code</th>
            <th>title</th>
            <th>Credit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="body-table-course">
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.course_id}</td>
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>{course.credit}</td>
              {/* <td>
              <a  onClick={() => handleLecture(course)}>
                  <button className="button-course">
                    Go to Lecture
                  </button>
                </a>
              </td> */}
              <td>
                <a href="#" onClick={() => handleEdit(course)}>
                  <img className="pen-icon-lecture" src={Edit} alt={'edit-image'} />
                </a>
                <button
                className="delete-course"
                onClick={() => {
                  handleDeleteSemester(course.course_id);
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

export default DbCourseList;