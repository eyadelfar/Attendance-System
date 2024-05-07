import React from 'react';

function ProfessorsList({ professors }) {
  return (
    <div className="professors-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dashboard</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {professors && professors.length > 0 ? (
            professors.map((professor) => (
              <tr key={professor.id}>
                <td>{professor.id}</td>
                <td>{professor.name}</td>
                <td>
                  <a href="#">Dashboard</a>  {/* Replace with actual dashboard link */}
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No professors available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProfessorsList;
