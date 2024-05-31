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
    <div className="account-settings-container">
        <h1 className='main-header'>Professors</h1> 
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="professor-header-of-form">
                            <h1>Create Professor</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Professor Name <span className='mandatory'>*</span></label>
                            <input type="text" id="Professor-Name"  placeholder='Enter The Professor Name' 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Password <span className='mandatory'>*</span></label>
                            <input type="password" id="lastName"  placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="create-id-form-field">
                            <label htmlFor="oldPassword">Username <span className='mandatory'>*</span></label>
                            <input
                            type="text"    
                            placeholder='Enter Username'     
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}          
                            />
                        </div>
                    </div>
                    <div >
                        <button id='create-button' onClick={handleSaveChanges}>
                            <div className='create-button-text'>
                                Create
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    // </div>
    
  );
};

export default ProfessorCreate;
