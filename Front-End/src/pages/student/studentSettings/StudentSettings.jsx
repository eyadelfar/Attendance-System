import React, { useState ,useEffect} from 'react';
import './StudentSettings.css';
import StudentAvatar from './StudentAvatar.png';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import phone from '../../../pics/phone.png'

const StudentSettings = () => {
    const [fullname, setFullname] = useState([]);
    const [passwordOld, setPasswordOld] = useState([]);
    const [passwordNew, setPasswordNew] = useState([]);
    const [phone_no, setPhone_no] = useState([]);
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [studentData, setStudentData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/students/student/${decodedToken.user_id}`, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
            setStudentData(res.data);
        })
        .catch((error) => {
          setError(error);
        });
      }, []);

      const handleSaveChanges = async (event) => {
        try {
          const response = await axios.put('http://localhost:4000/students', {
            student_id: decodedToken.user_id,
            fullname,
            passwordOld,
            passwordNew,
            phone_no,
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
    <div id="student-settings-container">
        <h1 id='student-settings-top-header'>Settings</h1>
        <h3 id='student-container-header'>Edit Profile</h3>
        
        <div id="student-setting-card">

            <div id="student-settings-profile">
                <img id='student-pic' src={StudentAvatar} alt="StudentAvatar"  />
                <div >
                    <h2 id="student-name" >{studentData.fullname}</h2>
                </div>
                <h3 id="student-roll">{studentData.roll_no}</h3>
                <img id='phone-pic' src={phone} alt="StudentAvatar"  />
                <div className='student-phone'>  
                  <h4 >{studentData.phone_no}</h4>
                </div>
                <div className='student-level'>
                  <h5 >Level :  {studentData.level}</h5>
                </div>
            </div>
            
            <div id="student-settings-form-parent">
                <div id='student-settings-form-col'>  
                    <div id='student-settings-form'>
                        <div id="student-settings-header">
                            <h1>Student Settings</h1>
                        </div>
                    
                        <div className="student-settings-form-field">
                            <label htmlFor="firstName" className="student-settings-form-label">Full Name </label>
                            <input 
                              type="text" 
                              id="firstName" 
                              className='student-settings-input' 
                              placeholder= {studentData.fullname}
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

                        <div className="student-settings-form-field">
                            <label htmlFor="lastName" className="student-settings-form-label">Phone Number </label>
                            <input 
                              type="text" 
                              id="lastName" 
                              className='student-settings-input' 
                              placeholder={studentData.phone_no} 
                              value={phone_no}
                              onChange={(e) => setPhone_no(e.target.value)}
                            />
                        </div>

                        <div className="student-settings-form-field">
                            <label htmlFor="oldPassword" className="student-settings-form-label">Old Password </label>
                            <input
                              type="password"
                              id="oldPassword"
                              className='student-settings-input' 
                              placeholder='Old Password'
                              value={passwordOld}
                              onChange={(e) => setPasswordOld(e.target.value)}
                            />
                        </div>
     
                        <div className="student-settings-form-field">
                            <label htmlFor="newPassword" className="student-settings-form-label">New Password:</label>
                            <input
                              type="password"
                              id="newPassword"
                              className='student-settings-input' 
                              placeholder='New Password'
                              onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                  handleSaveChanges();
                                  window.location.reload();
                                }
                              }}
                              value={passwordNew}
                              onChange={(e) => setPasswordNew(e.target.value)}
                            />
                        </div>
                    </div>
                    <div >
                        <button id='student-settings-save-button' onClick={() => {
                            handleSaveChanges();
                            window.location.reload();
                            }}>
                            <div className='save-button-text'>
                                Save Changes
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    
  );
};

export default StudentSettings;
