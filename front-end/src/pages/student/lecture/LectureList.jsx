import React, { useState, useEffect } from 'react';
import'./LectureList.css'
import camera from '../../../pics/camera.png'


 function LectureList() {
    return (
      <div className="lecture-list-student">
       <div className='lecture-header-student'>
       <h1>Lectures</h1>
        </div>
        
        <table className='lecture-table-student'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Professor Name</th>
        <th>Attendance</th>
      </tr>
    </thead>
    <tbody className='body-table-lecture-student'>
      <tr >
        <td>Computer Graphics</td>
        <td>Dale Robertson</td>
        <td> <button className='camera-button-lecture-student'>
            Open Camera
            <img className='camera-icon-lecture-student' src={camera}  />
            </button> </td>
        {/* Add other table cells as needed */}
      </tr>
      <tr>
        <td className='space-row' style={{ height: '30px' }}></td>
      </tr>
      <tr >
        <td>Computer Graphics</td>
        <td>Dale Robertson</td>
        <td> <button className='camera-button-lecture-student'>
            Open Camera
            <img className='camera-icon-lecture' src={camera}  />
            </button> </td>
        {/* Add other table cells as needed */}
      </tr>
      <tr></tr>
      
        {/* Add other table cells as needed */}
     
      {/* Add more rows if necessary */}
    </tbody>
  </table>
  
      </div>
    );
  }
  
  export default LectureList;