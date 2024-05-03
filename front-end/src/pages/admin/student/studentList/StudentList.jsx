import React, { useState, useEffect } from 'react';
import './StudentList.css';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from API or database
    const studentsData = [
      { id: 1, name: 'John Doe', department: 'Mathematics' },
      { id: 2, name: 'Jane Smith', department: 'Biology' },
      { id: 3, name: 'Bob Johnson', department: 'Computer Science' },
      // ...
    ];
    setStudents(studentsData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search students"
      />
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <span>({student.id})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;