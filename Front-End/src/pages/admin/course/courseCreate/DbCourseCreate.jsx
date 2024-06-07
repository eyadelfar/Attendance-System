import React, { useState, useEffect } from 'react';
import './CourseCreate.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// import { render } from 'react-dom';
// import { setError } from './error';

const DbCourseCreate = () => {
  const [code, setCourseCode] = useState('');
  const [title, setCourseTitle] = useState('');
  const [credit, setCredit] = useState('');
  const [error, setError] = useState(null);
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  
  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/courses', {
        code,
        title,
        credit
      },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    }
    );
    if (response.data ) {   
        window.location.href = '/CourseList';
      } else  {
        console.log('FAILD');
      }   
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <div className="">
      <h1 id='course-create-header'>Courses</h1>
      <div id="course-create-form">
        <form id='course-create-forms-parent'>
          <div id='course-create-form-child'>
            <div id="course-create-form-header">
              <h1>Create Course </h1>
            </div>

            <div className="course-create-form-field">
              <label >Course Name <span className='mandatory'>*</span></label>  
              <input 
                  type="text" 
                  className="course-select"  
                  placeholder='Enter The Course Name' 
                  value={title}
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
            </div>


            <div className="course-create-form-field">
              <label >Course Code <span className='mandatory'>*</span></label>  
              <input 
                  type="text"  
                  className="course-select" 
                  placeholder='Enter The Course Code' 
                  value={code}
                  onChange={(e) => setCourseCode(e.target.value)}
                />
              </div>

              <div className="course-create-form-field">
              <label >Credit <span className='mandatory'>*</span></label>  
              <input 
                  type="text" 
                  id="Professor-Name"  
                  className='professor-create-form-field-input'
                  placeholder='Enter The Credit Hour' 
                  value={credit}
                  onChange={(e) => setCredit(e.target.value)}
                />
              </div>

            <div>
                <button id='course-create-button' onClick={handleSaveChanges}>
                  <div className='create-button-text'>
                    Create
                  </div>
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DbCourseCreate;