import React, { useState, useEffect,useRef  } from 'react';
import'./Register.css'
 import plus from '../../../pics/plus.png'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

 function RegisterList(props) {
  const [registers, setRegisters] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:4000/semester/registeration', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
    setRegisters(res.data);
      // console.log(courses);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  const handleDeleteSemester = async (semesterId,studentId) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/registrations/${semesterId}/${studentId}`,
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });
      props.onDeleteSuccess();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('http://localhost:4000/registrations/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token,
        },
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  return (
    <div className="register-list">
      <div className='register-header'>
        <h1>Register</h1>
        <div>
          <input type="file" onChange={handleFileChange} ref={fileInputRef} />
          <button className='register-course' onClick={handleSaveChanges}>
            Upload
            <img className='plus-icon' src={plus} alt={'image'} />
          </button>
        </div>
      </div>
      
        <table className='register-table'>
    <thead>
      <tr>
        <th>Title</th>
        <th>Code</th>
        <th>Student Name</th>
        <th>Student Roll Number</th>
        <th>Professor Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className='body-table-register'>
           {registers.map((register, index) => (
            <tr key={index}>
              <td>{register.title}</td>
              <td>{register.code}</td>
              <td>{register.student_name}</td>
              <td>{register.roll_no}</td>
              <td>{register.professor_name}</td>

            <td> <button className='button-register'
                         onClick={() => {
                          handleDeleteSemester(register.semester_id,register.student_id);
                          window.location.reload();
                        }}
                >
                Drop
                </button> </td>
              </tr>
            ))}
          </tbody>
        </table>
        
            </div>
    );
  }
  
  export default RegisterList;