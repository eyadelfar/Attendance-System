import React from 'react';
 import Sidebar from '../../../Components/Sidebar/sidebar';
import ProfessorList from '../../../Components/professorlist/professorlist';
//  import './professors.css'; // Import the CSS for layout

const Professors = () => {
  return (
    <div className="professors-page">
      <Sidebar />
      <ProfessorList />
    </div>
  );
};

export default Professors;
