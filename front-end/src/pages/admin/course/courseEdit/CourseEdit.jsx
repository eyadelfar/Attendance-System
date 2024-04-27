import React, { useState } from 'react';
import './CourseEdit.css';


const CourseEdit = () => {
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
        <h1 className='main-header'>Courses</h1>      
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="course-header-of-form">
                            <h1>Edit Course</h1>
                        </div>
                    
                        <div className="form-field">
                            <label >Course Name</label>
                            <input type="text" id=""  defaultValue="Computer Graphics" />
                        </div>

                        <div className="form-field-code">
                            <label >Course Code</label>
                            <input type="text" id="l"  defaultValue="IT 331" />
                        </div>

                        <div className="form-field">
                            <label >Professor Name</label>
                            <select className="courses-select">
                        <option value="">Select A Professor</option>
                            <option value="option1">Dale Robertson</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        </div>
                        
                    </div>
                    <div >
                        <button id='edit-course-button' onClick={handleSaveChanges}>
                            <div className='create-button-text'>
                                Confirm
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    // </div>
    
  );
};

export default CourseEdit;
