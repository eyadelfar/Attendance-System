import React, { useState, useEffect } from 'react';
import'./LectureList.css'
import elipse from '../../../pics/elipse.png'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import moment from 'moment';

const LectureList = () => {
  const [courses, setCourses] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const [semes_id] = useState(localStorage.getItem('semester_id'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
 
  const date = lecture.lecture_date;
  const formatted = moment(date).format('DD-MM-YYYY');
  // console.log(formatted);


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
  
  return (
    <div className='lecture-list-student'>
       <div className='lecture-header-student'>
        <h1>Lectures</h1>
        <h1 className='lecture-name-student'>{courses.title}</h1>
         </div>
    <table className='lecture-table-student'>
      <thead>
        <tr>
        <th>Lecture#</th>
        <th>Attendance</th>
        <th>Date</th>
        <th>Time</th>
        </tr>
      </thead>
      <tbody className='body-table-lecture-student'>
         {lecture.map((lectures, index) => (
          <tr key={index}>
            <td> <div className="image-container">
            <img src={elipse} alt="Image" />
            <span>{index+1}</span>
          </div>
          </td>
                <td>'Attendance'</td>
                <td>{formatted}</td>
               <td>{lectures.lecture_time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default LectureList;
