import React, { useState, useEffect } from 'react';
import './TopBar.css';
import icon from '../../pics/icon.png';
import calendar from '../../pics/calendar.png';

const Topbar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const dd = String(today.getDate()).padStart(2);
  const mm = today.toLocaleString('default', { month: 'long' });
  const yyyy = today.getFullYear();
  
  const formattedDate = `${dd} ${mm} , ${yyyy}`;

  return (
    <div className="topbar">
      {/* <div className="topbar-left">
       `
      </div> */}
      <div className="topbar-right">
      <img className='calendar-image' src={calendar} alt="calendar" />
      <div className="topbar-date">{formattedDate}
      
      </div>
      
        <div className="notification-badge">
          <img src={icon} alt="Profile" />
          <div className="notification-name">John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;