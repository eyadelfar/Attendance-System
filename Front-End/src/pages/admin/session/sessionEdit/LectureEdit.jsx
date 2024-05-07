import React, { useState } from 'react';
import './LectureEdit.css';


const LectureEdit = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

//   const handleDeleteAccount = () => {
//     // Add your logic to delete account here
//   };

  return (
    <div className="lecture-edit-header">
        <div className='lecture-headers'>
        <h1 className='lecture-main-header'>Lectures</h1>
        <h2 className='course-name-header'>Computer Graphics</h2>
        </div>
            <div className="edit-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="lecture-header-of-form">
                            <h1>Edit Lecture</h1>
                        </div>
                        <div className="form-field-date">
                            <label htmlFor="lastName">Date <span className='mandatory'>*</span> </label>
                            <input type="date" className='date-text'   />
                        </div>

                        <div className="time-form">
                            <div>
                                <label >From <span className='mandatory'>*</span> </label> 
                                <input type="time" className='edit-time-select-1'  placeholder='mm/dd/yy' />
                            </div>
                        </div>
                    <div >
                        <button id='edit-lecture-button' onClick={handleSaveChanges}>
                            <div className='edit-lecture-button-text'>
                                Confrim
                                </div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    // </div>
    
  );
};

export default LectureEdit;
