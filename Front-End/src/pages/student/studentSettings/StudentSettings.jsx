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
    <div className="account-settings-container">
        <h1 id='studentsetting-header'>Settings</h1>
        <h3 id='student-container-header'>Edit Profile</h3>
        
        <div className="parent-div">

            <div className="account-settings-profile">
                    <img className='student-pic' src={StudentAvatar} alt="StudentAvatar"  />
                    <div >
                        <h2 className="student-name" >{studentData.fullname}</h2>
                    </div>
                    <h3 className="left-container-text">{studentData.roll_no}</h3>
                    <img className='phone-pic' src={phone} alt="StudentAvatar"  />
                    <div>  
                    <h4 className="left-container-phone">{studentData.phone_no}</h4>
                    </div>
                    <div>
                    <h5 className="left-container-text-2">Level :  {studentData.level}</h5>
                    </div>
            </div>
            
            <div className="account-settings-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="account-settings-header">
                            <h1>Account Settings</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Full Name </label>
                            <input type="text" id="firstName" placeholder= {studentData.fullname} 
                            
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Phone Number </label>
                            <input type="text" id="lastName" placeholder={studentData.phone_no} 
                              value={phone_no}
                              onChange={(e) => setPhone_no(e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="oldPassword">Old Password </label>
                            <input
                            type="password"
                            id="oldPassword"
                            placeholder='Enter Your Old Password'
                            value={passwordOld}
                            onChange={(e) => setPasswordOld(e.target.value)}
                            />
                        </div>
     
                        <div className="form-field">
                            <label htmlFor="newPassword">New Password:</label>
                            <input
                            type="password"
                            id="newPassword"
                            placeholder='Enter Your New Password'
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
                        <button className='save-button' onClick={() => {
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