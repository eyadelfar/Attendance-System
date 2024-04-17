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
        <h1 className='main-header'>Settings</h1>
        <h3 className='container-header'>Edit Profile</h3>
        
        <div className="parent-div">

            <div className="account-settings-profile">
                    <img className='admin-pic' src={AdminAvatar} alt="AdminAvatar"  />
                    <div >
                        <h2 className="admin-name" >John Doe</h2>
                    </div>
                    <h3 className="left-container-text">Admin</h3>
            </div>
            
            <div className="account-settings-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
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
                    </div>
                    <div >
                        <button className='save-button' onClick={handleSaveChanges}>
                            <div className='save-button-text'>
                                Save Changes
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    
  );
};

export default AdminSettings;
