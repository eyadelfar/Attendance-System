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
                    <h3 className="left-container-text">S 007</h3>
                    <div>
                    <h4 className="left-container-phone">+20122565599</h4>
                    </div>
                    <div>
                    <h5 className="left-container-text-2">Level 3</h5>
                    </div>
            </div>
            
            <div className="account-settings-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="account-settings-header">
                            <h1>Account Settings</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Full Name </label>
                            <input type="text" id="firstName" defaultValue="Dorothy"  />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Phone Number </label>
                            <input type="text" id="lastName" defaultValue="+20122565599"  />
                        </div>

                        <div className="form-field">
                            <label htmlFor="oldPassword">Old Password </label>
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
