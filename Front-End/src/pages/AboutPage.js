import React, { useState } from 'react';
import './SettingsPage.css'; // Make sure to create a CSS file with this name
import Layout from '../Components/Layout/Layout';



const SettingsPage = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    oldPassword: '',
    newPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log(user);
  };

  const Layout = ({}) => {
    return (
      <div className="Layout">
       <Layout></Layout>
      </div>
    );
  };
  return (
    
    <><main className="main-content">
        <section className="profile-section">
          <div className="profile-card">
            <img src="path-to-avatar.jpg" alt="John Doe" className="avatar" />
            <h2 className="user-name">{user.firstName} {user.lastName}</h2>
            <p className="role">Admin</p>
          </div>
        </section>
        <section className="settings-form-section">
          <form onSubmit={handleSubmit} className="settings-form">
            <h1>Account Settings</h1>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange} />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange} />
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={user.oldPassword}
              onChange={handleInputChange} />
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={user.newPassword}
              onChange={handleInputChange} />
            <div className="form-buttons">
              <button type="button" className="delete-account-btn">Delete Account</button>
              <button type="submit" className="save-changes-btn">Save Changes</button>
            </div>
          </form>
        </section>
      </main></>
  );
};

export default SettingsPage;
