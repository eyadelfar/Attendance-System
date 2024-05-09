import React, { useState, useEffect } from 'react';
import'./CourseList.css'
import Edit from '../../../../pics/edit.png'
 import Delete from '../../../../pics/delete.png'
 import plus from '../../../../pics/plus.png'


 function SessionList() {
    return (
      <div className="course-list">
       <div className='course-header'>
       <h1>Courses</h1>
        <div>
        <button className='create-course' >
        <img className='plus-icon' src={plus} alt={'image'} />
          Create Course
         
          </button>
        </div>
        </div>
        
        <table className='course-table'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Code</th>
        <th>Number of Registerations</th>
        <th>Professor Name</th>
        <th>Lecture</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className='body-table-course'>
      <tr >
        <td>Computer Graphics</td>
        <td>it 131</td>
        <td>1125 </td>
        <td>Dale Robertson</td>
        <td> <button className='button-course'>
            Go to Lecture
            </button> </td>
        <td><a href="/CourseEdit">
                 <img className='pen-icon-lecture' src={Edit} alt={'edit-image'} />
                   </a>
            <button className='delete-course'>
              <img className='del-icon-course' src={Delete}  />
              </button></td>
        {/* Add other table cells as needed */}
      </tr>
      <tr>
        <td className='space-row' style={{ height: '30px' }}></td>
      </tr>
      <tr >
      <td>Computer Graphics</td>
      <td>it 131</td>
        <td>1125 </td>
        <td>Dale Robertson</td>
        <td> <button className='button-course'>
            Go to Lecture
            </button> </td>
        <td><a href="/CourseEdit">
                 <img className='pen-icon-lecture' src={Edit} alt={'edit-image'} />
                   </a>
            <button className='delete-course'>
              <img className='del-icon-course' src={Delete}  />
              </button></td>
        {/* Add other table cells as needed */}
      </tr>
      {/* Add more rows if necessary */}
    </tbody>
  </table>
  
      </div>
    );
  }
  
  export default SessionList;