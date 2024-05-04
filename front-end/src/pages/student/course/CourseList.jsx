import React, { useState, useEffect } from 'react';
import'./CourseList.css'



 function CourseList() {
    return (
      <div className="course-list-student">
       <div className='course-header-student'>
       <h1>Courses</h1>
        </div>
        
        <table className='course-table-student'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Professor Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className='body-table-course-student'>
      <tr >
        <td>Computer Graphics</td>
        <td>Dale Robertson</td>
        <td> <button className='button-course-student'>
            Go to Lecture
            </button> </td>
        {/* Add other table cells as needed */}
      </tr>
      <tr>
        <td className='space-row' style={{ height: '30px' }}></td>
      </tr>
      <tr >
        <td>Computer Graphics</td>
        <td>Dale Robertson</td>
        <td> <button className='button-course-student'>
            Go to Lecture
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
  
  export default CourseList;