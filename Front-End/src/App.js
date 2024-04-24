import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from'./pages/LoginPage/LoginPage';
import AdminSettings from'./pages/Admin/AdminSettings/AdminSettings';
import StudentSettings from './pages/Student/StudentSettings';
import ProfessorCreate from './pages/Admin/Professor/ProfessorCreate/ProfessorCreate';
import TEST from'./pages/TEST';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/AdminSettings" element={<AdminSettings />} />
          <Route path="/StudentSettings" element={<StudentSettings />} />
          <Route path="/ProfessorCreate" element={<ProfessorCreate />} />
          <Route path="/TEST" element={<TEST />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;


