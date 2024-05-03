
import React, { useState, useEffect } from 'react';

// import ProfessorList from './ProfessorList';
import './ProfessorList.css';
import ProfessorItem from '../../../../components/reusable/professorItem/ProfessorItem';
// ProfessorList.js


let professor1 = {
  id : 1,
name:"bola"
};
  


function ProfessorsList() {
  return (
    <div className="professors-list">
      <h1>Professor List</h1>
      <table >
        <thead>
          <tr>
         
            <th>Name</th>
            <th>ID</th>
            <th>Dashboard</th>
            <th>Actions</th>

          </tr>
        </thead>
        
        <div>
          <ProfessorItem item={professor1}/>
        </div>

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