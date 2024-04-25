import React from 'react';
import {Routes,createBrowserRouter, Route ,Navigate} from 'react-router-dom';
import LoginPage from'../pages/login/Login';
import Professor from '../pages/admin/professor/professorList/ProfessorList';
import AdminSettings from '../pages/admin/adminSettings/AdminSettings';
import StudentSettings from '../pages/student/StudentSettings';
import ProfessorCreate from '../pages/admin/professor/professorCreate/ProfessorCreate';
import TEST from'../pages/TEST';

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/Login' element={<LoginPage/>}/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/professor' element={<Professor/>}/>
            <Route path='/adminSettings' element={<AdminSettings/>}/>
            <Route path='/studentSettings' element={<StudentSettings/>}/>
            <Route path='/professorCreate' element={<ProfessorCreate/>}/>
            <Route path='/test' element={<TEST/>}/>        
        </Routes>
    )
}

export default Router;
