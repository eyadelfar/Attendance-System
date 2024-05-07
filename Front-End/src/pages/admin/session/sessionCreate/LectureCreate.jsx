import React, { useState } from 'react';
import './LectureCreate.css';


const LectureCreate = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

//   const handleDeleteAccount = () => {
//     // Add your logic to delete account here
//   };

  return (
    <div className="lecture-create-header">
        <div className='lecture-headers'>
        <h1 className='create-lecture-main-header'>Lectures</h1>
        <h2 className='course-name-header'>Computer Graphics</h2>
        </div>
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="lecture-header-of-form">
                            <h1>Create Lecture</h1>
                        </div>
                        <div className="form-field-date">
                            <label htmlFor="lastName">Date <span className='mandatory'>*</span></label>
                            <input type="date" className='date-text'  placeholder='mm/dd/yy' />
                        </div>

                        <div className="time-formx">
                            <div>
                                <label >From <span className='mandatory'>*</span></label> 
                                <input type="time" className='create-time-select-1'  placeholder='mm/dd/yy' />
                            </div>
                        </div>
                    <div >
                        <button id='create-lecture-button' onClick={handleSaveChanges}>
                            <div className='create-lecture-button-text'>
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

export default LectureCreate;
