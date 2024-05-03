import React, { useState,useEffect } from 'react';
import LoginBackground from '../../pics/LoginBackground.png';
import './Login.css'; 
import axios from 'axios';
import jwt from 'jsonwebtoken';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });
      
      const token = response.data;
      setToken(token);
      localStorage.setItem('token', token);

      // Decode the JWT token to get the user's role

      // const decodedToken = jwt.decode(token);
      // const role = decodedToken.role;
      
      console.log(`Logged in successfully with JWT token: ${token}`);
      // console.log(`Role: ${role}`);
    } catch (error) {
      setError(error.message);
    }
  };





  return (
    <div className="loginContainer">
      <div className="brandSide">
        <div className="slogan">
          <img src={LoginBackground} alt="login background" />
        </div>
      </div>
      <div className="formSide">
        <div className="loginForm">
          <h1 className='login-header'>Log In</h1>
          <div className="inputGroup">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Username"
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
          <button id='login-button' onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;