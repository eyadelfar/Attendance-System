import React, { useState } from 'react';
import './StudentSettings.css';
import StudentAvatar from './StudentAvatar.png';

const StudentSettings = () => {
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
        <h1 id='studentsetting-header'>Settings</h1>
        <h3 id='student-container-header'>Edit Profile</h3>
        
        <div className="parent-div">

            <div className="account-settings-profile">
                    <img className='student-pic' src={StudentAvatar} alt="StudentAvatar"  />
                    <div >
                        <h2 className="student-name" >Dorothy Wood</h2>
                    </div>
                    <h3 className="left-container-text">Student</h3>
            </div>
            
            <div className="account-settings-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="account-settings-header">
                            <h1>Account Settings</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" defaultValue="Dorothy"  />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" defaultValue="Wood"  />
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

export default StudentSettings;
