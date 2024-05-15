import React, { useState } from 'react';
import './ProfessorCreate.css';


const ProfessorCreate = () => {


  const handleSaveChanges = () => {
   
  };


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
                        <div className="professor-header-of-form">
                            <h1>Create Professor</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Professor Name <span className='mandatory'>*</span></label>
                            <input type="text" id="Professor-Name"  placeholder='Enter The Professor Name' />
                        </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Password <span className='mandatory'>*</span></label>
                            <input type="password" id="lastName"  placeholder='Enter Password' />
                        </div>

                        <div className="create-id-form-field">
                            <label htmlFor="oldPassword">Username <span className='mandatory'>*</span></label>
                            <input
                            type="text"    
                            placeholder='Enter Username'               
                            />
                        </div>
                    </div>
                    <div >
                        <button id='create-button' onClick={handleSaveChanges}>
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
