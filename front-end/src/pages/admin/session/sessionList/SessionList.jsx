import React, { useState, useEffect } from 'react';
import'./SessionList.css'
import Edit from '../../../../pics/edit.png'
 import Delete from '../../../../pics/delete.png'
 import plus from '../../../../pics/plus.png'
 import camera from '../../../../pics/camera.png'

 function SessionList() {
    return (
      <div className="session-list">
       <div className='lecture-header'>
       <h1>Lectures</h1>
        <h1 className='lecture-name'>Computer Graphics</h1>
        
       
        <div>
        <button className='create-lecture' >
        <img className='plus-icon' src={plus} alt={'image'} />
          Create Lecture
         
          </button>
        </div>
        </div>
        
        <table className='session-table'>
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Attendance</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className='body-table-lecture'>
      <tr >
        <td>1 April 2024</td>
        <td>12:00 pm </td>
        <td> <button className='camera-button-lecture'>
            Open Camera
            <img className='camera-icon-lecture' src={camera}  />
            </button> </td>
        <td><a href="http://localhost:3000/professorEdit">
                 <img className='pen-icon-lecture' src={Edit} alt={'edit-image'} />
                   </a>
            <button className='delete-lecture'>
              <img className='del-icon-lecture' src={Delete}  />
              </button></td>
        {/* Add other table cells as needed */}
      </tr>
      <tr>
        <td className='space-row' style={{ height: '30px' }}></td>
      </tr>
      <tr >
        <td>1 April 2024</td>
        <td>12:00 pm </td>
        <td> <button className='camera-button-lecture'>
            Open Camera
            <img className='camera-icon-lecture' src={camera}  />
            </button> </td>
        <td><a href="http://localhost:3000/professorEdit">
                 <img className='pen-icon-lecture' src={Edit} alt={'edit-image'} />
                   </a>
            <button className='delete-lecture'>
              <img className='del-icon-lecture' src={Delete}  />
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