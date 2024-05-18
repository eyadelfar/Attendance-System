import React, { useState,useEffect } from 'react';
import './SideBar.css'; // Make sure to create a CSS file with this name
import LogoSidebar from '../../pics/LogoSidebar.png';
import dashboard from '../../pics/dashboard.png';
import courses from '../../pics/courses.png';
import student from '../../pics/student.png'
import professor from '../../pics/professor.png'
import session from '../../pics/session.png'
import settings from '../../pics/settings.png'
import LogoutButoon from '../../pics/LogoutButoon.png'
import register from '../../pics/register.png'

const SideBar = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [decodedToken, setDecodedToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  React.useEffect(() => {
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setDecodedToken(decoded);
    }
  }, [token]);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return null;
  }



  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('semester_id');
    localStorage.removeItem('lecture_id');
    localStorage.removeItem('course_id');
    localStorage.removeItem('student_id');
    localStorage.removeItem('faculty_id');
    setToken(null);
    window.location.href = '/Login';
  };

  const isRoleAdmin = decodedToken && decodedToken.role === 'faculty';
  const isRoleStudent = decodedToken && decodedToken.role === 'student';

  return (
     <div className="container">
     {isLoggedIn && (
        <aside className="sidebar">
          <div><div className="logo"><img src={LogoSidebar} alt="LogoSidebar" /></div>
          <nav className="nav-menu">
            {isRoleAdmin && (
              <a href="/dashboard" className="nav-link active">
                <span className="icon">
                  <img src={dashboard} alt="dashboard" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Dashboard</span>
              </a>
            )}
            {isRoleAdmin && (
              <a href="/CourseList" className="nav-link active">
                <span className="icon">
                  <img src={courses} alt="courses" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Courses</span>
              </a>
            )}
            {isRoleStudent && (
              <a href="/CourseListStudent" className="nav-link active">
                <span className="icon">
                  <img src={courses} alt="courses" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Courses</span>
              </a>
            )}
            {isRoleAdmin && (
              <a href="/StudentList" className="nav-link active">
                <span className="icon">
                  <img src={student} alt="student" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Students</span>
              </a>
            )}
            {isRoleAdmin && (
              <a href="/ProfessorList" className="nav-link active">
                <span className="icon">
                  <img src={professor} alt="professor" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Professors</span>
              </a>
            )}
            {isRoleAdmin && (
              <a href="/LectureList" className="nav-link active">
                <span className="icon">
                  <img src={session} alt="session" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Lectures</span>
              </a>
            )}
            {isRoleStudent&&(
              <a href="/LectureListStudent" className="nav-link active">
                <span className="icon">
                  <img src={session} alt="session" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Lectures</span>
              </a>
            )}
            {isRoleAdmin && (
              <a href="/register" className="nav-link active">
                <span className="icon">
                  <img src={register} alt="courses" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Register</span>
              </a>
            )}
            {isRoleAdmin && (
              <a href="/AdminSettings" className="nav-link active">
                <span className="icon">
                  <img src={settings} alt="settings" style={{ }} />
                </span>
                <span className="link-text">Settings</span>
              </a>
            )}
            {isRoleStudent&&(
              <a href="/StudentSettings" className="nav-link active">
                <span className="icon">
                  <img src={settings} alt="settings" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Settings</span>
              </a>
            )}
          </nav></div>

          <div className="logout">
            <span className="icon"><img src={LogoutButoon} alt="LogoutButoon" style={{ marginRight: '15px' }}/></span>
            <span className="link-text" onClick={handleLogout}>Logout</span>
          </div>
        </aside>
   )}
    </div>
  );
};

export default SideBar;