import React, { useState } from 'react';
import './AdminSettings.css';
import AdminAvatar from './AdminAvatar.png';

const AdminSettings = () => {
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
        <h1>Settings</h1>
        <h3>Edit Profile</h3>
        
        <div className="parent-div">

            <div className="account-settings-profile">
                    <img src={AdminAvatar} alt="AdminAvatar"  />
                    <div className="left-container-text-1">
                        <h2>John Doe</h2>
                    </div>
                    <h2 className="left-container-text-2">Admin</h2>
            </div>
            
            <div className="account-settings-form">
                <div className="account-settings-header">
                    <h1>Account Settings</h1>
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

                <div>
                    <button  onClick={handleSaveChanges}>Save Changes</button>
                </div>
            </div>

            
        </div>
        
    </div>
    
  );
};

export default AdminSettings;
