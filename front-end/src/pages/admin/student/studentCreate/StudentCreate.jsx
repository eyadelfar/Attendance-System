import React, { useState } from 'react';
import './StudentCreate.css';


const StudentCreate = () => {
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
                            <h1>Create Student</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Student Name <span className="mandatory">*</span> </label>
                            <input type="text" id="Student-Name"  placeholder='Enter The Student Name' />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Password  <span className="mandatory">*</span> </label>
                            <input type="password" id="Student-Password"  placeholder='Enter Password' />
                        </div>

                        <div className="id-level-form">
                            <div>
                                <label >Student ID </label> 
                                <input type="text" id="Student-ID" placeholder='Enter The ID'/>
                            </div>
                            <div className='level-sperate'>
                                <label className=''>Level   </label> 
                                <select className='level-select'>
                                <option value="">Select Level</option>
                                    <option value="option1">Level 1</option>
                                    <option value="option2">Level 2</option>
                                    <option value="option3">Level 3</option>
                                    <option value="option3">Level 4</option>
                                </select>
                            </div>
                           
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Phone Number</label>
                            <input type="text" id="Student-Name"  placeholder='Enter Phone Number' />
                        </div>
                    </div>
                    <div >
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


