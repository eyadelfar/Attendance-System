import React, { useState,useEffect } from 'react';
import LoginBackground from '../../pics/LoginBackground.png';
import './Login.css'; 
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);


  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });
      const token = response.data;
      setToken(token);
      localStorage.setItem('token', token);
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
          if (role === 'faculty') {
        // Redirect to admin dashboard
        window.location.href = '/dashboard';
      } else if (role === 'student') {
        // Redirect to user dashboard
        window.location.href = '/CourseListStudent';
       }   
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem('semester_id');
      localStorage.removeItem('lecture_id');
      localStorage.removeItem('course_id');
      localStorage.removeItem('student_id');
      localStorage.removeItem('faculty_id');
      setToken(null);
      window.location.href = '/Login';
    }
  }, []);

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
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSubmit();
                }
              }}
            />
          </div>
          <button id='login-button' onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
};
export default Login;