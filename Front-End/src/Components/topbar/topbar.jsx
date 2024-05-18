import React, { useState, useEffect } from 'react';
import './TopBar.css';
import icon from '../../pics/icon.png';
import calendar from '../../pics/calendar.png';

const Topbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const dd = String(today.getDate()).padStart(2);
  const mm = today.toLocaleString('default', { month: 'long' });
  const yyyy = today.getFullYear();
  const formattedDate = `${dd} ${mm} , ${yyyy}`;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
            <div className="notification-name">John Doe</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;