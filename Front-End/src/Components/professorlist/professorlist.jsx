import React from 'react';
import ProfessorItem from '../professoritem//professoritem'
import '../professorlist/professorlist.css';

const professorsData = [
  { name: 'Aimee Blume', id: '000123' },
  { name: 'Leonard Murphy', id: '000222' },
  { name: 'Marilyn Garibay', id: '000333' },
  { name: 'Charles Griffin', id: '000444' },
];

const ProfessorList = () => {
  return (
    <div className="professor-list">
      <div className="list-header">
        <div className="header-item">Name</div>
        <div className="header-item">ID</div>
        <div className="header-item">Dashboard</div>
        <div className="header-item">Actions</div>
      </div>
      {professorsData.map(prof => (
        <ProfessorItem key={prof.id} name={prof.name} id={prof.id} />
      ))}
    </div>
  );
};

export default ProfessorList;
