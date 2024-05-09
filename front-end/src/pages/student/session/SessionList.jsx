import React, { useState, useEffect } from 'react';
import'./SessionList.css'
import elipse from '../../../pics/elipse.png'

const courses = [
  { attendance: 'Attended', date: '1 April 2024',time:'12:00' },
  { attendance: 'Skipped', date: '8 April 2024',time:'12:00' },
  { attendance: 'Not Started', date: '15 April 2024',time:'12:00' },
  // add more courses as needed
];

const LectureList = () => {

  
  return (
    <div className='lecture-list-student'>
       <div className='lecture-header-student'>
        <h1>Lectures</h1>
        <h1 className='lecture-name-student'>Computer Graphics</h1>
         </div>
    <table className='lecture-table-student'>
      <thead>
        <tr>
        <th>Lecture#</th>
        <th>Attendance</th>
        <th>Date</th>
        <th>Time</th>
        </tr>
      </thead>
      <tbody className='body-table-lecture-student'>
        {courses.map((course, index) => (
          <tr key={course.name}>
            <td> <div class="image-container">
            <img src={elipse} alt="Image" />
            <span>{index+1}</span>
          </div>
          </td>
            <td className={
                course.attendance === 'Attended'? 'attended' :
                course.attendance === 'Skipped'? 'skipped' :
                'not-started'
              }>{course.attendance}</td>
            <td>{course.date}</td>
            <td>{course.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default LectureList;


//  function LectureList() {
//     return (
//       <div className="lecture-list-student">
//        <div className='lecture-header-student'>
//        <h1>Lectures</h1>
//        <h1 className='lecture-name-student'>Computer Graphics</h1>
//         </div>
        
//         <table className='lecture-table-student'>
//     <thead>
//       <tr>
//         <th>Lecture#</th>
//         <th>Attendance</th>
//         <th>Date</th>
//         <th>Time</th>
//       </tr>
//     </thead>
//     <tbody className='body-table-lecture-student'>
//       <tr >
//         <td>1</td>
//         <td>Attended</td>
//         <td> 1 Apr </td>
//             <td>12:00</td>
//         {/* Add other table cells as needed */}
//       </tr>
//       <tr>
//         <td className='space-row' style={{ height: '30px' }}></td>
//       </tr>
//       <tr >
//         <td>1</td>
//         <td>Skipped</td>
//         <td> 1 Apr </td>
//             <td>12:00</td>
//         {/* Add other table cells as needed */}
//       </tr>
      
//         {/* Add other table cells as needed */}
     
//       {/* Add more rows if necessary */}
//     </tbody>
//   </table>
  
//       </div>
//     );
//   }
  
//   export default LectureList;