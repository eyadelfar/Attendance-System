import React, { useState,useEffect } from 'react';
import './ProfessorEdit.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const ProfessorEdit = () => {
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [error, setError] = useState(null);
    const [faculty_id] = useState(localStorage.getItem('faculty_id'));
    const [professor, setProfessor] = useState([]);
    const [username, setUsername] = useState([]);
    const [fullname, setFullname] = useState([]);
    const [passwordOld, setPasswordOld] = useState([]);
    const [passwordNew, setPasswordNew] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/professors/professor/${faculty_id}`, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
            setProfessor(res.data);
        })
        .catch((error) => {
          setError(error);
        });
      }, []);
     
    const handleSaveChanges = async () => {
      
      try {
        const response = await axios.put('http://localhost:4000/professors', {
          faculty_id:faculty_id,
          username: username ? username : professor.username,
          fullname: fullname ? fullname : professor.fullname,
          passwordOld,
          passwordNew
          
        }, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        });
        window.location.href = '/ProfessorList';
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div id="professor-edit-container">
      <h1 id='professor-edit-header'>Professors</h1>
      <div id="professor-edit-form">
        <div id='professor-edit-forms-col'>  
          <div id='professor-edit-all-forms'>
            <div id="professor-header-of-form">
                <h1>Edit Professor</h1>
            </div>
        
            <div className="professor-edit-form-field">
              <label htmlFor="firstName" className='professor-edit-form-label'>
                Professor Name 
                <span className='mandatory'>*</span>
              </label>
              <input 
                type="text" 
                id="Professor-Name" 
                className='professor-edit-form-field-input'
                placeholder={professor.fullname} 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="professor-edit-form-field">
              <label htmlFor="lastName" className='professor-edit-form-label'>
                Old Password 
                <span className='mandatory'>*</span>
              </label>
              <input 
                type="password" 
                id="lastName"  
                className='professor-edit-form-field-input'
                placeholder="Enter Your Old Password"
                value={passwordOld}
                onChange={(e) => setPasswordOld(e.target.value)}
              />
            </div>

            <div className="professor-edit-form-field">
              <label htmlFor="lastName" className='professor-edit-form-label'>
                New Password 
                <span className='mandatory'>*</span>
              </label>
              <input 
                type="password" 
                id="New Password"  
                className='professor-edit-form-field-input'
                placeholder="Enter Your New Password"
                value={passwordNew}
                onChange={(e) => setPasswordNew(e.target.value)}
              />
            </div>

            <div className="professor-edit-form-field">
              <label className='professor-edit-form-label'>Username </label>
              <input
                type="text"
                id="Professor-ID"     
                className='professor-edit-form-field-input'
                placeholder={professor.username}   
                value={username}
                onChange={(e) => setUsername(e.target.value)}        
              />
            </div>
          </div>

          <div id='professor-edit-button'>
            <button id='edit-button' onClick={() => {
              handleSaveChanges();
              window.location.reload();
            }}>
              <div id='edit-button-text'>
                Confirm
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorEdit;
