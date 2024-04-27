import React, { useState } from 'react';
import './SessionEdit.css';


const SessionEdit = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

//   const handleDeleteAccount = () => {
//     // Add your logic to delete account here
//   };

  return (
    <div className="session-create-header">
        <div className='session-headers'>
        <h1 className='session-main-header'>Sessions</h1>
        <h2 className='course-name-header'>Computer Graphics</h2>
        </div>
            <div className="edit-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="session-header-of-form">
                            <h1>Edit Session</h1>
                        </div>
                    
                        <div className="form-field">
                            <label >Session Number</label>
                            <input type="text" id=""  defaultValue="4" />
                        </div>

                        <div className="form-field-date">
                            <label htmlFor="lastName">Date</label>
                            <input type="date" className='date-text'   />
                        </div>

                        <div className="time-form">
                            <div>
                                <label >From</label> 
                                <input type="time" className='time-select-1'  placeholder='mm/dd/yy' />
                            </div>
                            <div className='time-sperate'>
                                <label className=''>To</label> 
                                <input type="time" className='time-select-2'  placeholder='mm/dd/yy' />
                            </div>
                           
                        </div>
                    <div >
                        <button id='edit-session-button' onClick={handleSaveChanges}>
                            <div className='create-session-button-text'>
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

export default SessionEdit;
