import React, { useState } from 'react';
import './StudentCreate.css';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const StudentCreate = () => {
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
  const [roll_no, setRoll_no] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [password, setPassword] = useState('');
  const [level, setLevel] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      // Step 1: Save student information
      const studentResponse = await axios.post('http://localhost:5000/students', {
        roll_no,
        fullname,
        phone_no,
        password,
        level
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (studentResponse.data && studentResponse.data.student_id) {
        const student_id = studentResponse.data.student_id;

        // Step 2: Upload student photo
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('student_id', student_id);

        const uploadResponse = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          }
        });

        if (uploadResponse.data.status === 'success') {
          window.location.href = '/StudentList';
        } else {
          setError('Failed to upload the photo.');
        }
      } else {
        setError('Failed to save student information.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTrain = (event) => {
    event.preventDefault(); 
    axios.post('http://localhost:5000/train')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error submitting the form!', error);
    });
  };

  return (
    <div className="create-student-container">
        <h1 className='students-main-header-create'>Students</h1>
            <div className="create-form-student">
                <div className='all-forms-col-create'>  
                    <div className='all-forms-create-student'>
                        <div className="student-header-of-form">
                            <h1>Create Student</h1>
                        </div>
                    
                        <div className="form-field">
                            <label htmlFor="firstName">Student Name <span className="mandatory">*</span> </label>
                            <input type="text" id="Student-Name"  placeholder='Enter The Student Name' 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>

            <div className="form-field">
              <label htmlFor="lastName">Password  <span className="mandatory">*</span> </label>
              <input type="password" id="Student-Password" placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="id-level-form-create-student">
              <div>
                <label>Student ID </label>
                <input type="text" id="Student-ID" placeholder='Enter The ID'
                  value={roll_no}
                  onChange={(e) => setRoll_no(e.target.value)}
                />
              </div>

              <div className='level-sperate'>
                <label className=''>Level </label>
                <select className='level-select'
                  value={level}
                  onChange={(event) => setLevel(event.target.value)} >
                  <option value="">Select a Level</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

                        <div className="form-field">
                            <label htmlFor="lastName">Phone Number</label>
                            <input type="text" id="Student-No"  placeholder='Enter Phone Number'
                               value={phone_no}
                               onChange={(e) => setPhone_no(e.target.value)}
                            />
                        </div>
                    </div>
                    <div >
                        <button id='edit-create-button' onClick={handleSaveChanges}>
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

export default StudentCreate;