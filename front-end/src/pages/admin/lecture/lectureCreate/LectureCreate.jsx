import React, { useState,useEffect } from 'react';
import './LectureCreate.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const LectureCreate = () => {
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [error, setError] = useState(null);
    const [semes_id] = useState(localStorage.getItem('semester_id'));
    const [course_id] = useState(localStorage.getItem('course_id'));
    const [lecture_date, setLecture_date] = useState([]);
    const [lecture_time, setLecture_time] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/semester/courseDetails/semester/${semes_id}`, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          setCourses(res.data);
          // console.log(courses);
        })
        .catch((error) => {
          setError(error);
        });
      }, []);

    const handleSaveChanges = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/lecture', {
            semester_id:semes_id,
            course_id,
            lecture_date,
            lecture_time
          },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          }
        }
        );
        if (response.data ) {   
            window.location.href = '/LectureList';
          } else  {
            console.log('FAILD');
          }   
        } catch (error) {
          setError(error.message);
        }
      };



  return (
    <div className="lecture-create-header">
        <div className='lecture-headers'>
        <h1 className='create-lecture-main-header'>Lectures</h1>
        <h2 className='course-name-header'>{courses.title}</h2>
        </div>
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="lecture-header-of-form">
                            <h1>Create Lecture</h1>
                        </div>
                        <div className="form-field-date">
                            <label htmlFor="lastName">Date <span className='mandatory'>*</span></label>
                            <input type="date" className='date-text'  placeholder='mm/dd/yy' 
                            value={lecture_date}
                            onChange={(e) => setLecture_date(e.target.value)}
                            />
                        </div>

                        <div className="time-formx">
                            <div>
                                <label >From <span className='mandatory'>*</span></label> 
                                <input type="time" className='create-time-select-1'  placeholder='mm/dd/yy'
                                value={lecture_time}
                                onChange={(e) => setLecture_time(e.target.value)}
                                />
                            </div>
                        </div>
                    <div >
                        <button id='create-lecture-button' onClick={handleSaveChanges}>
                            <div className='create-lecture-button-text'>
                                Create
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    // </div>
    
  );
};

export default LectureCreate;
