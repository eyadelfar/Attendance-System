import React, { useState,useEffect } from 'react';
import './SideBar.css';
import LogoSidebar from '../../pics/LogoSidebar.png';
import dashboard from '../../pics/dashboard.png';
import courses from '../../pics/courses.png';
import student from '../../pics/student.png'
import professor from '../../pics/professor.png'
import session from '../../pics/session.png'
import settings from '../../pics/settings.png'
import LogoutButoon from '../../pics/LogoutButoon.png'
import register from '../../pics/register.png'
import { NavLink } from 'react-router-dom';


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
        <div>
          <div className="logo">
            <img src={LogoSidebar} alt="LogoSidebar" />
          </div>
          <nav className="nav-menu">
            {isRoleAdmin && (
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={dashboard} alt="dashboard" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Dashboard</span>
              </NavLink>
            )}
            {isRoleAdmin && (
              <NavLink to="/CourseList" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={courses} alt="courses" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Courses</span>
              </NavLink>
            )}
            {isRoleStudent && (
              <NavLink to="/CourseListStudent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={courses} alt="courses" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Courses</span>
              </NavLink>
            )}
            {isRoleAdmin && (
              <NavLink to="/StudentList" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={student} alt="student" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Students</span>
              </NavLink>
            )}
            {isRoleAdmin && (
              <NavLink to="/ProfessorList" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={professor} alt="professor" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Professors</span>
              </NavLink>
            )}
            {isRoleAdmin && (
              <NavLink to="/LectureList" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={session} alt="session" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Lectures</span>
              </NavLink>
            )}
            {isRoleStudent && (
              <NavLink to="/LectureListStudent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={session} alt="session" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Lectures</span>
              </NavLink>
            )}
            {isRoleAdmin && (
              <NavLink to="/register" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={register} alt="courses" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Register</span>
              </NavLink>
            )}
            {isRoleAdmin && (
              <NavLink to="/AdminSettings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={settings} alt="settings" />
                </span>
                <span className="link-text">Settings</span>
              </NavLink>
            )}
            {isRoleStudent && (
              <NavLink to="/StudentSettings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span className="icon">
                  <img src={settings} alt="settings" style={{ marginRight: '15px' }} />
                </span>
                <span className="link-text">Settings</span>
              </NavLink>
            )}
          </nav>
        </div>
        <div className="logout">
          <span className="icon">
            <img src={LogoutButoon} alt="LogoutButoon" style={{ marginRight: '15px' }} />
          </span>
          <span className="link-text" onClick={handleLogout}>Logout</span>
        </div>
      </aside>
    )}
  </div>
    
  );
};

export default SideBar;