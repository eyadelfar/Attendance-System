
import React, { useState } from 'react';
import './App.css'; // Make sure the CSS file is in the same directory
import login_background from './login_background.png';
const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log(id, password);
  };

  return (
    <div className="loginContainer">
      <div className="brandSide">
        <div className="slogan">
        <img src={login_background} alt="login background"  />
        </div>
      </div>
      <div className="formSide">
        <div className="loginForm">
          <h1>Log In</h1>
          <div className="inputGroup">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Your ID"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

