import React, { useState } from 'react';
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
return (
    <div className="container">
      <aside className="sidebar">
        {/* Assuming you have SVGs or icon fonts */}
        <div><div className="logo"><img src={LogoSidebar} alt="LogoSidebar" /></div>
        <nav className="nav-menu">
        <a href="/dashboard" className="nav-link active">
  <span className="icon">
    <img src={dashboard} alt="dashboard" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Dashboard</span>
</a>
<a href="/CourseList" className="nav-link active">
  <span className="icon">
    <img src={courses} alt="courses" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Courses</span>
</a>
<a href="/StudentsList" className="nav-link active">
  <span className="icon">
    <img src={student} alt="student" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Students</span>
</a>
<a href="/ProfessorList" className="nav-link active">
  <span className="icon">
    <img src={professor} alt="professor" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Professors</span>
</a>
<a href="/Sessionlist" className="nav-link active">
  <span className="icon">
    <img src={session} alt="session" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Sessions</span>
</a>
<a href="/register" className="nav-link active">
  <span className="icon">
    <img src={register} alt="courses" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Register</span>
</a>
<a href="/Settings" className="nav-link active">
  <span className="icon">
    <img src={settings} alt="settings" style={{ marginRight: '15px' }} />
  </span>
  <span className="link-text">Settings</span>
</a>

          {/* Repeat for other links */}
        </nav></div>
        
        <div className="logout">
          <span className="icon"><img src={LogoutButoon} alt="LogoutButoon" style={{ marginRight: '15px' }}/></span>
          <span className="link-text">Logout</span>
        </div>
      </aside>
    </div>
);
};

export default SideBar
