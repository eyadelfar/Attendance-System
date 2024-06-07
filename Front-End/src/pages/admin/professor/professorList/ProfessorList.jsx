import React, { useState, useEffect  } from 'react';
import './ProfessorList.css';
import plus from '../../../../pics/plus.png'
import Edit from '../../../../pics/edit.png'
import Delete from '../../../../pics/delete.png'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'


function ProfessorsList(props) {
  const [professors, setProfessors] = useState([]);
  const [token] = useState(localStorage.getItem('token')); 
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
  

        useEffect(() => {
          axios.get('http://localhost:4000/professors', {
            headers: {
              'Authorization': token,
              'Content-Type': 'application/json'
            }
          })
          .then((res) => {
            setProfessors(res.data);
            // console.log(courses);
          })
          .catch((error) => {
            setError(error);
          });
        }, []);

      const handleEdit = (professor) => {
        // Save the lecture_id in local storage
        localStorage.setItem('faculty_id', professor.faculty_id);
        // Redirect to the new page
        window.location.href = '/ProfessorEdit';
      };

      const handleDeleteSemester = async (facultyId) => {
        try {
          if (decodedToken.user_id === facultyId) {
            setError('You cannot delete your own account');
            return;
          }
          const response = await axios({
            method: 'delete',
            url: `http://localhost:4000/professors/${facultyId}`,
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
     
  return (
    <div className="professors-list">
     <div className='header'>
      <h1 className='professor-header-admin'>Professors</h1>
      <div>
       
          <button className='button1' >
          <img src={plus} alt={'image'} />

          <a href="/ProfessorCreate">
              Create Professor
        </a>

          </button>
      </div>
    </div>
      
      <table className='list-table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>UserName</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className='body-table'>
         {professors.map((professor, index) => (
            <tr key={index}>
              <td>{professor.fullname}</td>
              <td>{professor.username}</td>
            
             <td> <a href="#" onClick={() => handleEdit(professor)}>
               <img className='edit-icon' src={Edit} alt={'edit-image'} />
                 </a>
            <button className='delete'
             onClick={() => {
              handleDeleteSemester(professor.faculty_id);
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

export default ProfessorsList;
