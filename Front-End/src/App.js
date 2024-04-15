import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from'./pages/LoginPage/LoginPage';
import AdminPage from'./pages/AdminPage/AdminPage';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;


