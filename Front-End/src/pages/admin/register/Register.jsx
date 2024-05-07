import React, { useState, useEffect } from 'react';
import'./Register.css'
 import plus from '../../../pics/plus.png'


 function RegisterList() {
    return (
      <div className="register-list">
       <div className='register-header'>
       <h1>Register</h1>
        <div>
        <button className='register-course' >
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
      <tr >
        <td>Computer Graphics</td>
        <td>1125 </td>
        <td>Dale Robertson</td>
        <td>2020123</td>
        <td>Dale Robertson</td>
        <td> <button className='button-register'>
            Drop
            </button> </td>
        {/* Add other table cells as needed */}
      </tr>
      <tr>
      <td className='space-row' style={{ height: '30px' }}></td>
    </tr>
      <tr >
        <td>Computer Graphics</td>
        <td>1125 </td>
        <td>Dale Robertson</td>
        <td>2020123</td>
        <td>Dale Robertson</td>
        <td> <button className='button-register'>
            Drop
            </button> </td>
        {/* Add other table cells as needed */}
      </tr>
      {/* Add more rows if necessary */}
    </tbody>
  </table>
  
      </div>
    );
  }
  
  export default RegisterList;