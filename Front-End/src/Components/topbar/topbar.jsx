import React from 'react';
import './topbar.css'; // Your CSS file for styling

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-logo">
        <img src="logo.png" alt="Company Logo" />
      </div>
      <div className="topbar-menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Contact</div>
      </div>
      <div className="topbar-user">
        <img src="user.png" alt="User" />
        <span>John Doe</span>
      </div>
    </div>
  );
}

export default Topbar;
