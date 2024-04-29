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
            <h1 id='adminsetting-header'>Settings</h1>
            <h3 id='admin-container-header'>Edit Profile</h3>
            
            <div id="admin-setting-card">
                <div id="account-settings-profile">
                    <img id='admin-pic' src={AdminAvatar} alt="AdminAvatar"  />
                    <div >
                        <h2 id="admin-name">John Doe</h2>
                    </div>
                    <h3 id="role">Admin</h3>
                </div>
                
                <div id="admin-settings-form-parent">
                    <form id='admin-settings-form-col'>  
                        <div id='admin-settings-form'>
                            <div id="admin-settings-header">
                                <h1>Account Settings</h1>
                            </div>
                        
                            <div className="admin-settings-form-field">
                                <label htmlFor="firstName">First Name:</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    className='admin-settings-input' 
                                    defaultValue="John" 
                                    placeholder='First Name'
                                />
                            </div>

                            <div className="admin-settings-form-field">
                                <label htmlFor="lastName">Last Name:</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    className='admin-settings-input'  
                                    defaultValue="Doe" 
                                    placeholder='Last Name'
                                />
                            </div>

                            <div className="admin-settings-form-field">
                                <label htmlFor="oldPassword">Old Password:</label>
                                <input
                                    type="password"
                                    id="oldPassword" 
                                    className='admin-settings-input' 
                                    placeholder='Old Password'
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>

                            <div className="admin-settings-form-field">
                                <label htmlFor="newPassword">New Password:</label>
                                <input
                                    type="password"
                                    id="newPassword" 
                                    className='admin-settings-input' 
                                    placeholder='New Password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div >
                            <button id='admin-settings-save-button' onClick={handleSaveChanges}>
                                <div id='admin-settings-save-text'>
                                    Save Changes
                                    </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;