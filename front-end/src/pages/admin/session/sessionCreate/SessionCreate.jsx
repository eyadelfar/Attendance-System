import React, { useState } from 'react';
import './SessionCreate.css';


const SessionCreate = () => {
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
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="session-header-of-form">
                            <h1>Create Session</h1>
                        </div>
                    
                        <div className="form-field">
                            <label >Session Number</label>
                            <input type="text" id=""  placeholder='Enter Session Number' />
                        </div>

                        <div className="form-field-date">
                            <label htmlFor="lastName">Date</label>
                            <input type="date" className='date-text'  placeholder='mm/dd/yy' />
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
                        <button id='create-session-button' onClick={handleSaveChanges}>
                            <div className='create-session-button-text'>
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

export default SessionCreate;
