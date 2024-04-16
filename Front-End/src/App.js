import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from'./pages/LoginPage/LoginPage';
import AdminPage from'./pages/AdminPage/AdminPage';
import AdminSettings from'./pages/AdminPage/AdminSettings';
import TEST from'./pages/TEST';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/AdminSettings" element={<AdminSettings />} />
          <Route path="/TEST" element={<TEST />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;


