import React, { useState, useEffect } from 'react';
import './StudentList.css';
import Edit from '../../../../pics/edit.png'
 import Delete from '../../../../pics/delete.png'
 import plus from '../../../../pics/plus.png'

function StudentList() {
  return (
    <div className="Student-list">
     <div className='header'>
      <h1>Professors</h1>
      <div>
      <button className='button1' >
      <img src={plus} alt={'image'} />
        Create Professor
       
        </button>
      </div>
      </div>
      
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className='table-body'>
    <tr className='row'>
      <td>slim</td>
      <td>201200</td>
      <td><a href="http://localhost:3000/professorEdit">
               <img src={Edit} alt={'image'} />
                 </a>
          <button className='button2'>
            <img src={Delete}  />
            </button></td>
      {/* Add other table cells as needed */}
    </tr>
    <tr className='row2'>
      <td>slim</td>
      <td>201200</td>
      <td><a href="http://localhost:3000/professorEdit">
               <img src={Edit} alt={'image'} />
                 </a>
          <button className='button2'>
            <img src={Delete}  />
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