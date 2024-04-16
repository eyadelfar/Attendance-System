

import React, { useState } from 'react';
import './AdminSettings.css';
import AdminAvatar from './AdminAvatar.png';

const AccountSettings = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

  const handleDeleteAccount = () => {
    // Add your logic to delete account here
  };

  return (
    <div className="account-settings-container">
      <div className="account-settings-header">
        <h1>Account Settings</h1>
        <div>
          <button  onClick={handleSaveChanges}>Save Changes</button>
          <button  onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" defaultValue="John" readOnly />
      </div>
      <div className="form-field">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" defaultValue="Doe" readOnly />
      </div>
      <div className="form-field">
        <label htmlFor="oldPassword">Old Password:</label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="vertical-line">
      {/* Other content of your div */}
    </div>
    <div className="left-container-picture">
    <img src={AdminAvatar} alt="AdminAvatar"  />
      <div className="left-container-text-1">
        <h2>John Doe</h2>
      </div>
      <h2 className="left-container-text-2">Admin</h2>
    </div>
    </div>
    
  );
};

export default AccountSettings;