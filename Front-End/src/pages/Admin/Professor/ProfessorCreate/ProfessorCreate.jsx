import React, { useState } from 'react';
import './ProfessorCreate.css';


const ProfessorCreate = () => {
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
        <h1 className='main-header'>Professor</h1>
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
                        <div className="header-of-form">
                            <h1>Create Professor</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Professor Name:</label>
                            <input type="text" id="Professor-Name"  placeholder='Enter The Professor Name' />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Professor Password:</label>
                            <input type="password" id="lastName"  placeholder='Enter Password' />
                        </div>

                        <div className="form-field">
                            <label htmlFor="oldPassword">Professor ID:</label>
                            <input
                            type="text"
                            id="Professor-ID"     
                            placeholder='Enter ID'               
                            />
                        </div>

                        {/* <div className="form-field">
                            <label htmlFor="newPassword">New Password:</label>
                            <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div> */}
                    </div>
                    <div >
                        <button className='create-button' onClick={handleSaveChanges}>
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

export default ProfessorCreate;
