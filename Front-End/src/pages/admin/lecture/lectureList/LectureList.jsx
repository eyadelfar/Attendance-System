import React, { useState, useEffect } from 'react';
import './LectureList.css';
import Edit from '../../../../pics/edit.png';
import Delete from '../../../../pics/delete.png';
import plus from '../../../../pics/plus.png';
import camera from '../../../../pics/camera.png';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import moment from 'moment';
import elipse from '../../../../pics/elipse.png';

function LectureList(props) {
  const [courses, setCourses] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const [semes_id] = useState(localStorage.getItem('semester_id'));
  const [course_id] = useState(localStorage.getItem('course_id'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [Attendance_Status, setAttendance_Status] = useState('');
  const [Camera_Source, setCamera_Source] = useState('');

  const [currentLectureId, setCurrentLectureId] = useState(null);

  const handleOpenPopup = (lectureId) => {
    setCurrentLectureId(lectureId);
    setIsPopupOpen(true);
   
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  // console.log(currentLectureId);

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestData = {
        semester_id: localStorage.getItem('semester_id'),
        course_id: localStorage.getItem('course_id'),
        lecture_id: currentLectureId,
        attendance_type: Attendance_Status,
        video_source: Camera_Source
    };
    
    axios.post('http://127.0.0.1:5000/recognize', requestData)
    .then(response => {
        console.log(response.data);
        setIsPopupOpen(false);
    })
    .catch(error => {
        console.error('There was an error submitting the form!', error);
    });
};


  useEffect(() => {
    axios.get(`http://localhost:4000/semester/courseDetails/semester/${semes_id}`, {
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

  useEffect(() => {
    axios.get(`http://localhost:4000/lecture/semester/${semes_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setLecture(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);



  const handleEdit = (lectures) => {
    // Save the lecture_id in local storage
    localStorage.setItem('lecture_id', lectures.lecture_id);
    // Redirect to the new page
    window.location.href = '/LectureEdit';
  };

  const handleDeleteSemester = async (lecturesId) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/lecture/${lecturesId}`,
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
    <div className="session-list">
     <div className='lecture-header'>
     <h1>Lectures</h1>
      <h1 className='lecture-name'>{courses.title}</h1>
      
     
      <div>
      <a href="/LectureCreate">
      <button className='create-lecture' >
      <img className='plus-icon' src={plus} alt={'image'} />
        Create Lecture
        </button>
        </a>
      </div>
      </div>
      
      <table className='session-table'>
  <thead>
    <tr>
      <th>Lecture#</th>
      <th>Date</th>
      <th>Time</th>
      <th>Attendance</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className="body-table-lecture">
          {lecture.map((lectures, index) => (
            <tr key={index}>
               <td> <div className="image-container">
             <img src={elipse} alt="Image" />
             <span>{index+1}</span>
             </div>
           </td>
              <td>{moment(lectures.lecture_date).format('YYYY-MM-DD')}</td>
              <td>{lectures.lecture_time}</td>
              <td>
              {index === lecture.length - 1 && (
                      <div className="App">
                      <button className="camera-button-lecture" onClick={() => {
                      handleOpenPopup(lectures.lecture_id);
                    }}>
                        Open Camera
                        <img className="camera-icon-lecture" src={camera} alt="Camera Icon" />
                      </button>
                
                      {isPopupOpen && (
                        <div className="popup">
                          <div className="popup-content">
                            <span className="close" onClick={handleClosePopup}>&times;</span>
                            <h2>Enter Your Details</h2>
                            <div>
                              <label className='field1-label' htmlFor="textField1">Attending Status:</label>
                              <br />
                              <input className='popup-input'
                                type="text"
                                id="textField1"
                                value={Attendance_Status}
                                onChange={(e) => setAttendance_Status(e.target.value)}
                              /><br /><br />
                              <label className='field2-label' htmlFor="textField2">Camera IP:</label>
                              <br />
                              <input className='popup-input'
                               
                                type="text"
                                id="textField2"
                                value={Camera_Source}
                                onChange={(e) => setCamera_Source(e.target.value)}
                              /><br /><br />
                              <button onClick={handleSubmit}>Submit</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                
                )}
              </td>
              <td>
              <a href="#" onClick={() => handleEdit(lectures)}>
                  <img className="pen-icon-lecture" src={Edit} alt={'edit-image'} />
                </a> 
                    <button
                    className="delete-course"
                    onClick={() => {
                      handleDeleteSemester(lectures.lecture_id);
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
};

export default LectureList;