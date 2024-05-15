import React, { useState,useEffect } from 'react';
import './LectureEdit.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import moment from 'moment';

           
const LectureEdit = () => {
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [error, setError] = useState(null);
    const [semes_id] = useState(localStorage.getItem('semester_id'));
    const [course_id] = useState(localStorage.getItem('course_id'));
    const [lecture_id] = useState(localStorage.getItem('lecture_id'));
    const [lecture_date, setLecture_date] = useState([]);
    const [lecture_time, setLecture_time] = useState([]);
    const [courses, setCourses] = useState([]);
    const [lectures, setLectures] = useState([]);
    const dateTime = lectures.lecture_date;
    const formattedDate = moment(dateTime).format('YYYY-MM-DD');
      
    
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
    
          useEffect(() => {
                axios.get(`http://localhost:4000/lecture/lecture/${lecture_id}`, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
                })
                .then((res) => {
                    setLectures(res.data);
                // console.log(lectures);
                })
                .catch((error) => {
                setError(error);
                });
            }, []);

      const handleSaveChanges = async () => {
        try {
          const response = await axios.put('http://localhost:4000/lecture', {
            semester_id:semes_id,
            course_id:course_id,
            lecture_id:lecture_id,
            lecture_date,
            lecture_time
          }, {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
          });
        //   console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className="lecture-edit-header">
        <div className='lecture-headers'>
        <h1 className='lecture-main-header'>Lectures</h1>
        <h2 className='course-name-header'>{courses.title}</h2>
        </div>
            <div className="edit-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="lecture-header-of-form">
                            <h1>Edit Lecture</h1>
                        </div>
                        <div className="form-field-date">
                        <label htmlFor="lastName">Date <span className='mandatory'>*</span> </label>
                        <input type="text" className='date-text'
                            placeholder={formattedDate}
                             value={lecture_date}
                            onChange={(e) => setLecture_date(e.target.value)}
                        
                        />
                        </div>

                        <div className="time-form">
                        <div>
                        <label htmlFor="lastName">Time <span className='mandatory'>*</span> </label>
                            <input type="text" className='edit-time-select-1' 
                            placeholder={lectures.lecture_time}
                            value={lecture_time}
                            onChange={(e) =>  setLecture_time(e.target.value)}
                            />
                        </div>
                    </div>
                        </div>
                    <div >
                        <button id='edit-lecture-button' onClick={handleSaveChanges}>
                            <div className='edit-lecture-button-text'>
                                Confrim
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    // </div>
    
  );
};

export default LectureEdit;
