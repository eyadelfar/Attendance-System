import React, { useState } from 'react';
import './CourseCreate.css';

const CourseCreate = () => {
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

//   const handleDeleteAccount = () => {
//     // Add your logic to delete account here
//   };

    return (
        <div className="">
            <h1 id='course-create-header'>Courses</h1>      
            <div id="course-create-form">
                <form id='course-create-forms-parent'>  
                    <div id='course-create-form-child'>
                        <div id="course-create-form-header">
                            <h1>Create Course </h1>
                        </div>
                
                        <div className="course-create-form-field">
                            <label >Course Title <span className='mandatory'>*</span></label>
                            <input type="text" id="" placeholder='Enter The Course Name' />
                        </div>

                        <div id="course-create-form-field-code">
                            <label >Course Code <span className='mandatory'>*</span></label>
                            <input type="text" id="" placeholder='Enter The Code' />
                        </div>

                        <div className="course-create-form-field">
                            <label >Professor Name <span className='mandatory'>*</span></label>
                            <select className="course-select">
                                <option value="">Select A Professor</option>
                                <option value="option1">Dale Robertson</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div id="term-year-form">
                            <label >Term <span className='mandatory'>*</span></label>
                            <label id='xxx'>Year <span className='mandatory'>*</span></label>
                        </div>
                        <div id='term-year-form'>
                        <select id="term-year-form">
                                <option value="">Select a term</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <select id="term-year-form">
                                <option value="">Select a year</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                    </div>

                    <div>
                        <button id='course-create-button' onClick={handleSaveChanges}>
                            <div className='create-button-text'>
                                Create
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CourseCreate;