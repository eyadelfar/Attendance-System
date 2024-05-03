
import React, { useState, useEffect } from 'react';

// import ProfessorList from './ProfessorList';
import './ProfessorList.css';
// import ProfessorItem from '../../../../components/reusable/professorItem/ProfessorItem';
// ProfessorList.js
import plus from '../../../../pics/plus.png'
import Edit from '../../../../pics/edit.png'
 import Delete from '../../../../pics/delete.png'

let professor1 = {
  id : 202251,
name:"Swilam"
};
  


function ProfessorsList() {
  return (
    <div className="professors-list">
     <div className='header'>
      <h1>Professors</h1>
      <div>
      <button className='button1' >
      <img src={plus} alt={'image'} />
        Create Professor
       
        </button>
      </div>
      </div>
      
      <table className='list-table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody className='table-body'>
    <tr className='professor-row'>
      <td>slim</td>
      <td>201200</td>
      <td><a href="http://localhost:3000/professorEdit">
               <img className='edit-icon' src={Edit} alt={'image'} />
                 </a>
          <button className='button2'>
            <img className='delete-icon' src={Delete}  />
            </button></td>
      {/* Add other table cells as needed */}
    </tr>
    <tr className='professor-row2'>
      <td>slim</td>
      <td>201200</td>
      <td><a href="http://localhost:3000/professorEdit">
               <img className='edit-icon' src={Edit} alt={'image'} />
                 </a>
          <button className='button2'>
            <img className='delete-icon' src={Delete}  />
            </button></td>
      {/* Add other table cells as needed */}
    </tr>
    {/* Add more rows if necessary */}
  </tbody>
</table>

    </div>
  );
}

export default ProfessorsList;


// const ProfessorListComponent = () => {
//   return (
//     <div>
//       <h1>Professors</h1>
//       <ul>
//         {professors.map((professor) => (
//           <li key={professor.id}>
//             <span>{professor.name}</span>
//             <span>ID: {professor.id}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProfessorListComponent;



// const Professors = () => {
//   return (
//     <div className="professors-page">
//       <ProfessorList />
//     </div>
//   );
// };

// export default Professors;