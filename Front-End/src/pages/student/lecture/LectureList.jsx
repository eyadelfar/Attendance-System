import React, { useState, useEffect } from 'react';
import'./LectureList.css'
import elipse from '../../../pics/elipse.png'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import moment from 'moment';

const LectureList = () => {
  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [token] = useState(localStorage.getItem('token'));
  const [semes_id] = useState(localStorage.getItem('semester_id'));
  const [student_id] = useState(localStorage.getItem('student_id'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
  // console,lo
  // const date = lecture.lecture_date;
  // const formatted = moment(date).format('DD-MM-YYYY');
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
    })
    .catch((error) => {
      setError(error);
    });
  }, [semes_id, token]);

  useEffect(() => {
    axios.get(`http://localhost:4000/lecture/semester/${semes_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setLectures(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, [semes_id, token]);

  useEffect(() => {
    const fetchAttendances = async () => {
      const attendancePromises = lectures.map((lecture) =>
        axios.get(`http://localhost:4000/attendances/studentInLecture/${lecture.lecture_id}/${decodedToken.user_id}`, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        })
      );

      try {
        const attendanceResponses = await Promise.all(attendancePromises);
        const attendanceDataMap = attendanceResponses.reduce((acc, res, index) => {
          acc[lectures[index].lecture_id] = res.data.length > 0 ? 'Joined' : 'Absent';
          return acc;
        }, {});
        setAttendanceData(attendanceDataMap);
      } catch (error) {
        console.error(error);
      }
    };

    if (lectures.length > 0) {
      fetchAttendances();
    }
  }, [lectures, decodedToken.user_id, token]);

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
          {lectures.map((lecture, index) => (
            <tr key={lecture.lecture_id}>
              <td>
                <div className="image-container">
                  <img src={elipse} alt="Image" />
                  <span>{index + 1}</span>
                </div>
              </td>
              <td>{attendanceData[lecture.lecture_id] || 'Loading...'}</td>
              <td>{moment(lecture.lecture_date).format('DD-MM-YYYY')}</td>
              <td>{lecture.lecture_time}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  );
};
export default LectureList;
