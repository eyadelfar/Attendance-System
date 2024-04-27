import React from 'react';
import ProfessorList from '../../../../pages/Admin/Professor/ProfessorList/ProfessorList';
import './ProfessorList.css'; // Import the CSS for layout

const Professors = () => {
  return (
    <div className="professors-page">
      <ProfessorList />
    </div>
  );
};

export default Professors;