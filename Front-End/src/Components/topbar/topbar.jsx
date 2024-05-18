import React, { useState, useEffect } from 'react';
import './TopBar.css';
import icon from '../../pics/icon.png';
import calendar from '../../pics/calendar.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const Topbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const dd = String(today.getDate()).padStart(2);
  const mm = today.toLocaleString('default', { month: 'long' });
  const yyyy = today.getFullYear();
  const formattedDate = `${dd} ${mm} , ${yyyy}`;
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [decodedToken, setDecodedToken] = useState({});
  const [professorData, setProfessorData] = useState({});
  const [studentData, setStudentData] = useState({});
 

  React.useEffect(() => {
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setDecodedToken(decoded);
    }
  }, [token])

  const isRoleAdmin = decodedToken && decodedToken.role === 'faculty';
  const isRoleStudent =decodedToken &&decodedToken.role === 'student';
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);



  
  useEffect(() => {
    if (!isLoggedIn) {
      return; // exit early if not a role admin or not logged in
    }
    if (!isRoleAdmin) {
      return; // exit early if not a role admin
    }
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    axios.get(`http://localhost:4000/professors/professor/${decodedToken.user_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setProfessorData(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, [isRoleAdmin, isLoggedIn]);


  useEffect(() => {
    if (!isLoggedIn) {
      return; // exit early if not a student or not logged in
    }
    if (!isRoleStudent) {
      return; // exit early if not a role admin
    }
      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      setDecodedToken(decodedToken);
      axios.get(`http://localhost:4000/students/student/${decodedToken.user_id}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        setStudentData(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [isRoleStudent,isLoggedIn]);



  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="topbar">
      {isLoggedIn && (
        <div className="topbar-right">
          <img className='calendar-image' src={calendar} alt="calendar" />
          <div className="topbar-date">{formattedDate}</div>
          <div className="notification-badge">
            <img src={icon} alt="Profile" />
            <div className="notification-name">{studentData.fullname||professorData.fullname}</div>
          </div>
          </div>
      )}
    </div>
  );
};

export default Topbar;