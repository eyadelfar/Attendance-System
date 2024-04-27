import React, { useState } from 'react';
import './StudentEdit.css';


const StudentEdit = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

//   const handleDeleteAccount = () => {
//     // Add your logic to delete account here
//   };

  return (
    <div className="account-settings-container">
        <h1 className='students-main-header'>Students</h1>
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="student-header-of-form">
                            <h1>Edit Student</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Student Name</label>
                            <input type="text" id="Student-Name"  defaultValue="Melissa Ellison" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Password</label>
                            <input type="password" id="Student-Password"  defaultValue="Melissa Ellison" />
                        </div>

                        <div className="id-level-form">
                            <div>
                                <label >Student ID</label> 
                                <input type="text" id="Student-ID" defaultValue="2020123"/>
                            </div>
                            <div className='level-sperate'>
                                <label className=''>Level</label> 
                                <select className='level-select' >
                                <option value="">Select Level</option>
                                    <option value="option1">1</option>
                                    <option value="option2">2</option>
                                    <option value="option3">3</option>
                                    <option value="option3">4</option>
                                </select>
                            </div>
                           
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Courses</label>
                            <select className="courses-select">
                        <option value="">Select Courses</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        </div>

                        <div className="file-field">
                            <label htmlFor="firstName">Upload Photo</label>
                            <input type="file" id='input-button' />
                        
                        </div>
  
                    </div>
                    <div >
                    <button id='edit-confirm-button' onClick={handleSaveChanges}>
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

export default StudentEdit;
