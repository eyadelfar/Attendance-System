import React, { useState } from 'react';
import './ProfessorEdit.css';


const ProfessorEdit = () => {
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
        <h1 className='main-header'>Professors</h1>
        {/* <h3 className='container-header'>Edit Profile</h3> */}
        
        {/* <div className="parent-div"> */}

            {/* <div className="account-settings-profile">
                    <img className='student-pic' src={StudentAvatar} alt="StudentAvatar"  />
                    <div >
                        <h2 className="student-name" >Dorothy Wood</h2>
                    </div>
                    <h3 className="left-container-text">Student</h3>
            </div> */}
            
            <div className="create-form">
                <div className='all-forms-col'>  
                    <div className='all-forms'>
                        <div className="edit-header-of-form">
                            <h1>Edit Professor</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Professor Name <span className='mandatory'>*</span></label>
                            <input type="text" id="Professor-Name"  defaultValue="Aimee Blume" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Password <span className='mandatory'>*</span></label>
                            <input type="password" id="lastName"  defaultValue="Aimee Blume" />
                        </div>

                        <div className="id-form-field">
                            <label htmlFor="oldPassword">Username </label>
                            <input
                            type="text"
                            id="Professor-ID"     
                            defaultValue="2020123"           
                            />
                        </div>


                    </div>
                    <div >
                        <button id='edit-professor-button' onClick={handleSaveChanges}>
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

export default ProfessorEdit;
