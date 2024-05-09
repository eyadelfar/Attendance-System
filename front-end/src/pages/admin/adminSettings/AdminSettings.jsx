import React, { useState,useEffect } from 'react';
import './AdminSettings.css';
import AdminAvatar from './AdminAvatar.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const AdminSettings = () => {
  const [fullname, setFullName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [username, setUserName] = useState('');
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [professorData, setProfessorData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/professors/professor/${decodedToken.user_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setProfessorData(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  const handleSaveChanges = async () => {
    await axios.put('http://localhost:4000/professors', {
    username,
    faculty_id: decodedToken.user_id,
    fullname ,
    passwordOld: oldPassword,
    passwordNew: newPassword
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
        <div className="account-settings-container">
          <h1 id='adminsetting-header'>Settings</h1>
          <h3 id='admin-container-header'>Edit Profile</h3>
              
            <div id="admin-setting-card">
              <div id="account-settings-profile">
                <img id='admin-pic' src={AdminAvatar} alt="AdminAvatar"  />
                <div >
                 <h2 id="admin-name">{professorData.fullname}</h2>
                </div>
                <h3 id="role">Proffesor</h3>
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
                          placeholder={professorData.fullname}
                          value={fullname}
                          onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="admin-settings-form-field">
                      <label htmlFor="lastName">Username:</label>
                      <input 
                          type="text" 
                          id="lastName" 
                          className='admin-settings-input'  
                         placeholder={professorData.username}
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
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
}



export default AdminSettings;