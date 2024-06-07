import React, { useState,useEffect } from 'react';
import './StudentEdit.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const StudentEdit = () => {
    const [token] = useState(localStorage.getItem('token'));
    const decodedToken = jwtDecode(token);
    const [error, setError] = useState(null);
    const [student_id] = useState(localStorage.getItem('student_id'));
    const [student, setStudent] = useState([]);
    const [roll_no, setRoll_no] = useState([]);
    const [fullname, setFullname] = useState([]);
    const [passwordOld, setPasswordOld] = useState([]);
    const [passwordNew, setPasswordNew] = useState([]);
    const [level, setLevel] = useState([]);
    const [phone_no, setPhone_no] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/students/student/${student_id}`, {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
         setStudent(res.data);
        })
        .catch((error) => {
          setError(error);
        });
      }, []);

      
      const handleSaveChanges = async () => {
        try {
          const response = await axios.put('http://localhost:4000/students', {
            student_id:student_id,
            roll_no,
            fullname,
            passwordOld,
            passwordNew,
            level,
            phone_no
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
        <h1 className='students-main-header'>Students</h1>
            <div className="edit-form-student">
                <div className='all-forms-col-edit'>  
                    <div className='all-forms-edit'>
                        <div className="student-header-of-form">
                            <h1>Edit Student</h1>
                        </div>
                    
                        <div className="form-field-edit">
                            <label className='first-name-label' htmlFor="firstName">Student Name <span className="mandatory">*</span></label>
                            <input type="text" id="Student-Name"  placeholder={student.fullname} 
                             value={fullname}
                             onChange={(e) => setFullname(e.target.value)}
                            
                            />
                        </div>

                        <div className="form-field-edit">
                            <label htmlFor="lastName">Old Password <span className="mandatory">*</span></label>
                            <input type="password" id="Student-Old Password"   placeholder='Enter your Old Password'
                            value={passwordOld}
                            onChange={(e) => setPasswordOld(e.target.value)}
                            />
                        </div>
                           
                        <div className="form-field-edit">
                            <label htmlFor="lastName">New Password <span className="mandatory">*</span></label>
                            <input type="password" id="Student-New Password"  placeholder='Enter your New Password'
                            value={passwordNew}
                            onChange={(e) => setPasswordNew(e.target.value)}
                            />
                        </div>

                    
                        <div className="id-level-form">
                            <div>
                                <label >Student ID</label> 
                                <input type="text" id="Student-ID" placeholder={student.roll_no}
                                value={roll_no}
                                onChange={(e) => setRoll_no(e.target.value)}
                                />
                            </div>
                            <div className='level-sperate'>
                                <label id='student-edit-form-level-input'>Level</label> 
                                <select className='level-select'
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                 >
                                <option value="">{student.level}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                           
                        </div>

                        <div className="form-field-edit">
                            <label htmlFor="lastName">Phone Number</label>
                            <input type="text" id="Student-No"  placeholder={student.phone_no}  
                            value={phone_no}
                             onChange={(e) => setPhone_no(e.target.value)}
                            />
                        </div>
                    </div>
                    <div >
                       <button id='edit-confirm-button' onClick={() => {
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

export default StudentEdit;
