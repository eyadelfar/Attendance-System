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
          // console.log(courses);
        })
        .catch((error) => {
          setError(error);
        });
      }, []);
     
    //    console.log(professor);
     
      const handleSaveChanges = async () => {
        // console.log(faculty_id);
        // console.log(username);
        // console.log(fullname);
        // console.log(passwordOld);
        // console.log(passwordNew);
        
        try {
          const response = await axios.put('http://localhost:4000/professors', {
            faculty_id:faculty_id,
            username,
            fullname,
            passwordOld,
            passwordNew
            
          }, {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
          });
        
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div className="account-settings-container">
        <h1 className='main-header'>Professors</h1>
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="edit-header-of-form">
                            <h1>Edit Professor</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Professor Name <span className='mandatory'>*</span></label>
                            <input type="text" id="Professor-Name"  placeholder={professor.fullname} 
                             value={fullname}
                             onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Old Password <span className='mandatory'>*</span></label>
                            <input type="password" id="lastName"  placeholder="Enter Your Old Password"
                             value={passwordOld}
                             onChange={(e) => setPasswordOld(e.target.value)}
                            
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">New Password <span className='mandatory'>*</span></label>
                            <input type="password" id="New Password"  placeholder="Enter Your New Password"
                             value={passwordNew}
                             onChange={(e) => setPasswordNew(e.target.value)}
                            />
                        </div>

                        <div className="id-form-field">
                            <label >Username </label>
                            <input
                            type="text"
                            id="Professor-ID"     
                            placeholder={professor.username}   
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}        
                            />
                        </div>


                    </div>
                            <div >
                            <button id='edit-professor-button' onClick={() => {
                            handleSaveChanges();
                            window.location.reload();
                            }}>
                             <div className='create-button-text'>
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
