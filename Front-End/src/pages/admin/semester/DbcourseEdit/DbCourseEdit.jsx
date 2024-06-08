import React, { useState,useEffect } from 'react';
import './CourseEdit.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'


const DbCourseEdit = () => {
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
  const [Course_id] = useState(localStorage.getItem('course_id'));
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [credit, setCredit] = useState('');
  const [coursedata, setCourseData] = useState('');


  useEffect(() => {
    axios.get(`http://localhost:4000/courses/course/${Course_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setCourseData(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);


  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/courses/${Course_id}`, {
        code,
        title,
        credit
      }, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });
      window.location.href = '/DbCourseList';
    } catch (error) {
      console.error(error);
    } 
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

            <div className="course-create-form-field">
              <label htmlFor="firstName" className='professor-edit-form-label'>
              Course Title 
                <span className='mandatory'>*</span>
              </label>
              <input 
                type="text" 
                id="Professor-Name" 
                className='professor-edit-form-field-input'
                placeholder={coursedata.title} 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="course-create-form-field">
              <label htmlFor="firstName" className='professor-edit-form-label'>
              Course Code 
                <span className='mandatory'>*</span>
              </label>
              <input 
                type="text" 
                id="Professor-Name" 
                className='professor-edit-form-field-input'
                placeholder={coursedata.code} 
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            <div className="course-create-form-field">
              <label htmlFor="firstName" className='professor-edit-form-label'>
                Course Credit 
                <span className='mandatory'>*</span>
              </label>
              <input 
                type="text" 
                id="Professor-Name" 
                className='professor-edit-form-field-input'
                placeholder={coursedata.credit} 
                value={credit}
                onChange={(e) => setCredit(e.target.value)}
              />
            </div>

             <div>
             <button id='edit-course-button' onClick={handleSaveChanges}
             >
            <div className='edit-course-text'>
                    Confirm
           </div>
          </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DbCourseEdit;