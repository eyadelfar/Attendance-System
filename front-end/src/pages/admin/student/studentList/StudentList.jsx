import React, { useState, useEffect } from 'react';
import './StudentList.css';
import Edit from '../../../../pics/edit.png'
 import Delete from '../../../../pics/delete.png'
 import plus from '../../../../pics/plus.png'

 
function StudentList() {
  return (
    <div className="student-list">
     <div className='head'>
      <h1>Students</h1>
      <div>
      <button className='create-student' >
      <img className='plus-icon' src={plus} alt={'image'} />
        Create Student
       
        </button>
      </div>
      </div>
      
      <table className='student-table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>roll number</th>
      <th>Level</th>
      <th>Phone Number</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className='body-table'>
    <tr >
      <td>slim</td>
      <td>201200</td>
      <td>3</td>
      <td>0121526542</td>
      <td><a href="/StudentsEdit">
               <img className='pen-icon-student' src={Edit} alt={'edit-image'} />
                 </a>
          <button className='delete'>
            <img className='del-icon-student' src={Delete}  />
            </button></td>
      {/* Add other table cells as needed */}
    </tr>
    <tr>
      <td className='space-row' style={{ height: '30px' }}></td>
    </tr>
    <tr >
      <td>slim</td>
      <td>201200</td>
      <td>3</td>
      <td>0121526542</td>
      <td><a href="/professorEdit">
               <img className='pen-icon-student' src={Edit} alt={'edit-image'} />
                 </a>
          <button className='button2'>
            <img className='del-icon-student' src={Delete}  />
            </button></td>
      {/* Add other table cells as needed */}
    </tr>
    {/* Add more rows if necessary */}
  </tbody>
</table>

    </div>
  );
}

export default StudentList;