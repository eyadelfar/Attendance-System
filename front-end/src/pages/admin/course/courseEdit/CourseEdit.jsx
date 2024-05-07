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
    <div className="">
        <h1 id='course-edit-header'>Courses</h1>      
        <div id="course-edit-form">
            <form id='course-edit-forms-parent'>  
                <div id='course-edit-form-child'>
                    <div id="course-edit-form-header">
                        <h1>Edit Course </h1>
                    </div>
            
                    <div className="course-edit-form-field">
                        <label >Course Title <span className='mandatory'>*</span></label>
                        <input type="text" id="" defaultValue='Computer Graphics' />
                    </div>

                    <div id="course-edit-form-field-code">
                        <label >Course Code <span className='mandatory'>*</span></label>
                        <input type="text" id="" defaultValue='IT 331' />
                    </div>

                    <div className="course-edit-form-field">
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
                            <option value="option1">Summer</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <select id="term-year-form">
                            <option value="">Select a year</option>
                            <option value="option1">2025</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                </div>

                <div>
                    <button id='edit-course-button' onClick={handleSaveChanges}>
                        <div className='edit-course-text'>
                            Create
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
);
};
export default CourseEdit;
