import React, { useState,useEffect } from 'react';
import './CourseEdit.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const CourseEdit = (props) => {
        const [courses, setCourses] = useState([]);
        const [token] = useState(localStorage.getItem('token'));
        const decodedToken = jwtDecode(token);
        const [error, setError] = useState(null);
        const sems_id = props.match.params.id;
    useEffect(() => {
      axios.get(`http://localhost:4000/semester/courseDetails/semester/${sems_id}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        setCourses(res.data);
        console.log(courses);
      })
      .catch((error) => {
        setError(error);
      });
    }, []);
  
    const handleSaveChanges = async () => {
      await axios.put('http://localhost:4000/semester', {
      semester_id:courses.semster_id,
      course_title:courses.course_title,
      course_code:courses.course_code,
      faculty_id:courses.faculty_id,
      year:courses.year,
      term:courses.term
    },{
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }  
    }
  )
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
  };
return (
    <div className="">
        <h1 id='course-edit-header'>Courses</h1>   
        <div id="course-edit-form">
            <form id='course-edit-forms-parent'>  
                <div id='course-edit-form-child'>
                    <div id="course-edit-form-header">
                        <h1>Edit Course </h1>
                    </div>
            
                    <div className="course-edit-form-field">
                        <label >Course Title <span className='mandatory'>*</span></label>
                        <input type="text" id="" defaultValue='Computer Graphics' />
                    </div>

                    <div id="course-edit-form-field-code">
                        <label >Course Code <span className='mandatory'>*</span></label>
                        <input type="text" id="" defaultValue='IT 331' />
                    </div>

                    <div className="course-edit-form-field">
                        <label >Professor Name <span className='mandatory'>*</span></label>
                        <select className="course-select">
                            <option value="">Select A Professor</option>
                            <option value="option1">Dale Robertson</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div id="term-year-form">
                        <label >Term <span className='mandatory'>*</span></label>
                        <label id='xxx'>Year <span className='mandatory'>*</span></label>
                    </div>
                    <div id='term-year-form'>
                    <select id="term-year-form">
                            <option value="">Select a term</option>
                            <option value="option1">Summer</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <select id="term-year-form">
                            <option value="">Select a year</option>
                            <option value="option1">2025</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                </div>

                <div>
                    <button id='edit-course-button' onClick={handleSaveChanges}>
                        <div className='edit-course-text'>
                            Create
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};
export default CourseEdit;
