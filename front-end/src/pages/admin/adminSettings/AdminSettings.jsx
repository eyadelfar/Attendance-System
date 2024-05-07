import React, { useState } from 'react';
import './AdminSettings.css';
import AdminAvatar from './AdminAvatar.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AdminSettings = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);

  const handleSaveChanges = async () => {
      await axios.put('http://localhost:4000/professors', {
      faculty_id: decodedToken.user_id,
      fullname: `${firstName} ${lastName}`,
      password: newPassword
    },{
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }  
    }
  )
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
  };

    return (
      <div>
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
                      <label htmlFor="firstName">Full Name:</label>
                      <input 
                          type="text" 
                          id="firstName" 
                          className='admin-settings-input' 
                          defaultValue="John" 
                          placeholder='First Name'
                      />
                    </div>

                    <div className="admin-settings-form-field">
                      <label htmlFor="lastName">Username:</label>
                      <input 
                          type="text" 
                          id="lastName" 
                          className='admin-settings-input'  
                          defaultValue="221456" 
                          placeholder='Username'
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
        <div id="admin-settings-form-parent">
          <form id='admin-settings-form-col'>  
            <div id="admin-settings-form">
              <div id="admin-settings-header">
                <h1>Account Settings</h1>
              </div>
              <div className="admin-settings-form-field">
                <label htmlFor="firstName">First Name:</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className='admin-settings-input' 
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="admin-settings-form-field">
                <label htmlFor="lastName">Last Name:</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className='admin-settings-input'  
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
    
  );
};

export default AdminSettings;