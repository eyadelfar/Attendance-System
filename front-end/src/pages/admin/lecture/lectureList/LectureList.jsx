import React, { useState, useEffect } from 'react';
import'./LectureList.css'
import Edit from '../../../../pics/edit.png'
import Delete from '../../../../pics/delete.png'
import plus from '../../../../pics/plus.png'
import camera from '../../../../pics/camera.png'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import moment from 'moment';
import elipse from '../../../../pics/elipse.png'


function LectureList(props) {
  const [courses, setCourses] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const [semes_id] = useState(localStorage.getItem('semester_id'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);


  
  
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
                  <button className="camera-button-lecture">
                    Open Camera
                    <img className="camera-icon-lecture" src={camera} />
                  </button>
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