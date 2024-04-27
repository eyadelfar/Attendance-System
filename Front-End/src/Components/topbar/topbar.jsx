// Topbar.js
import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-date">30 MAY 2024</div>
        <div className="topbar-notifications">
          <img src="notification-icon.png" alt="Notification" />
          <div className="notification-badge">
            <img src="profile-image.png" alt="Profile" />
            <div className="notification-name">John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;