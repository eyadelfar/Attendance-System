import React, { useState } from 'react';
import './ProfessorCreate.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const ProfessorCreate = () => {
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [error, setError] = useState(null);
    const [fullname, setFullname] = useState([]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    
      const handleSaveChanges = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/professors', {
            username,
            fullname,
            password
          },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          }
        }
        );
        if (response.data ) {   
            window.location.href = '/ProfessorList';
          } else  {
            console.log('FAILD');
          }   
        } catch (error) {
          setError(error.message);
        }
      };

  return (
    <div id="professor-create-container">
      <h1 id='professor-create-header'>Professors</h1> 
        <div id="professor-create-form">
          <div id='professor-create-forms-col'>  
            <div id='professor-create-all-forms'>
              <div id="professor-header-of-form">
                  <h1>Create Professor</h1>
              </div>
          
              <div className="professor-create-form-field">
                <label htmlFor="firstName" className='professor-create-form-label'>
                  Professor Name 
                  <span className='mandatory'>*</span>
                </label>
                <input 
                  type="text" 
                  id="Professor-Name"  
                  className='professor-create-form-field-input'
                  placeholder='Enter The Professor Name' 
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="professor-create-form-field">
                <label htmlFor="lastName" className='professor-create-form-label'>
                  Password 
                  <span className='mandatory'>*</span>
                </label>
                <input 
                  type="password" 
                  id="lastName"  
                  className='professor-create-form-field-input'
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="professor-create-form-field">
                <label htmlFor="username" className='professor-create-form-label'>
                  Username 
                  <span className='mandatory'>*</span>
                </label>
                <input
                  type="text"    
                  placeholder='Enter Username'     
                  className='professor-create-form-field-input'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}          
                />
              </div>
            </div>

            <div id='professor-create-button'>
              <button id='create-button' onClick={handleSaveChanges}>
                <div className='create-button-text'>
                    Create
                </div>
              </button>
            </div>
          </div>
        </div>
            
    </div>
    
  );
};

export default ProfessorCreate;
