import React, { useState } from 'react';
import './StudentCreate.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const StudentCreate = () => { 
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [error, setError] = useState(null);
    const [roll_no, setRoll_no] = useState([]);
    const [fullname, setFullname] = useState([]);
    const [phone_no, setPhone_no] = useState([]);
    const [password, setPassword] = useState([]);
    const [level, setLevel] = useState([]);
    // const [selectedid, setSelectedId] = useState({});

    const handleSaveChanges = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/students', {
            roll_no,
            fullname,
            phone_no,
            password,
            level
          },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          }
        }
        );
        if (response.data ) {   
            window.location.href = '/StudentList';
          } else  {
            console.log('FAILD');
          }   
        } catch (error) {
          setError(error.message);
        }
      };



  return (
    <div className="account-settings-container">
        <h1 className='students-main-header'>Students</h1>
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="student-header-of-form">
                            <h1>Create Student</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Student Name <span className="mandatory">*</span> </label>
                            <input type="text" id="Student-Name"  placeholder='Enter The Student Name' 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Password  <span className="mandatory">*</span> </label>
                            <input type="password" id="Student-Password"  placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="id-level-form">
                            <div>
                                <label >Student ID </label> 
                                <input type="text" id="Student-ID" placeholder='Enter The ID'
                                value={roll_no}
                                onChange={(e) => setRoll_no(e.target.value)}
                                />
                            </div>

                               
                            <div className='level-sperate'>
                            <label className=''>Level   </label> 
                            <select className='level-select' 
                              value={level}
                             onChange={(event) => setLevel(event.target.value)} >
                                <option value="">Select a Level</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Phone Number</label>
                            <input type="text" id="Student-No"  placeholder='Enter Phone Number'
                               value={phone_no}
                               onChange={(e) => setPhone_no(e.target.value)}
                            />
                        </div>
                    </div>
                    <div >
                      
                    <button type='file'>
                            student photo
                        </button>
                        <button id='edit-create-button' onClick={handleSaveChanges}>
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

export default StudentCreate;


