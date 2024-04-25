import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from'./pages/LoginPage/LoginPage';
import AdminSettings from'./pages/Admin/AdminSettings/AdminSettings';
import StudentSettings from './pages/Student/StudentSettings';
import ProfessorCreate from './pages/Admin/Professor/ProfessorCreate/ProfessorCreate';
import TEST from'./pages/TEST';
import Layout from './Components/Layout/layout';


function App() {
  return (
    <Layout/>
  );
}

export default App;