import React, { useState, useEffect } from 'react';
import './StudentList.css';
import Edit from '../../../../pics/edit.png'
 import Delete from '../../../../pics/delete.png'
 import plus from '../../../../pics/plus.png'
 import setting from '../../../../pics/setting.png'
 import axios from 'axios';
 import { jwtDecode } from 'jwt-decode'
 
function StudentList(props) {
  const [students, setStudents] = useState([]);
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:4000/students', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setStudents(res.data);
      // console.log(courses);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  const handleEdit = (student) => {
    // Save the lecture_id in local storage
    localStorage.setItem('student_id', student.student_id);
    // Redirect to the new page
    window.location.href = '/StudentEdit';
  };

  const handleDeleteSemester = async (studentId) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/students/${studentId}`,
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
    <div className="student-list">
     <div className='head'>
      <h1>Students</h1>
      <div>
      <button className='train-student' onClick={handleTrain}>
      <img className='plus-icon' src={setting} alt={'image'} />
        Train
       
        </button>
      <a href="/StudentCreate">
        <button className='create-student' >
      <img className='plus-icon' src={plus} alt={'image'} />
        Create Student
       
        </button>
        </a>
      </div>
      </div>
      
      <table className='student-table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>roll no</th>
      <th>Level</th>
      <th>Phone Number</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className='body-table'>
         {students.map((student, index) => (
            <tr key={index}>
              <td>{student.fullname}</td>
              <td>{student.roll_no}</td>
              <td>{student.level}</td>
              <td>{student.phone_no}</td>
              
          <td> <a href="#" onClick={() => handleEdit(student)}>
               <img className='pen-icon-student' src={Edit} alt={'edit-image'} />
                 </a>
            <button className='delete'
             onClick={() => {
              handleDeleteSemester(student.student_id);
              window.location.reload();
            }}
            >
            <img className='del-icon-student' src={Delete}  />
            </button>
            </td>
         </tr>
        ))}
           </tbody>
           </table>
         </div>
  );
}

export default StudentList;