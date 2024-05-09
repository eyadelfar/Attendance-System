import React from 'react';
import './TopBar.css';
import notification from '../../pics/notification.png';
import icon from '../../pics/icon.png';
import calendar from '../../pics/calendar.png';

const Topbar = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  const formattedDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={calendar} alt="calendar" />
        <div className="topbar-date">{formattedDate}</div>
      </div>
      <div className="topbar-right">
        <img src={notification} alt="Notification" style={{ marginRight: '30px' }} />
        <div className="notification-badge">
          <img src={icon} alt="Profile" />
          <div className="notification-name">John Doe</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;