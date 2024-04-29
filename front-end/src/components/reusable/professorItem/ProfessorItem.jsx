import React from 'react';
// import '../../pages/admin/professor/professorList/professorList.css';

const ProfessorItem = ({ name, id }) => {
  return (
    <div className="professor-item">
      <div className="professor-name">{name}</div>
      <div className="professor-id">{id}</div>
      <div className="professor-dashboard">
        {/* Dashboard icon placeholder */}
      </div>
      <div className="professor-actions">
        {/* Action icons placeholders */}
      </div>
    </div>
  );
};

export default ProfessorItem;
