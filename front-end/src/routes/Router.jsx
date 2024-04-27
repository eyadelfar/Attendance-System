import React from 'react';
import {Routes,createBrowserRouter, Route ,Navigate} from 'react-router-dom';
import LoginPage from'../pages/login/Login';
import Professor from '../pages/Admin/Professor/ProfessorList/ProfessorList';
import AdminSettings from '../pages/Admin/AdminSettings/AdminSettings';
import StudentSettings from '../pages/student/studentSettings/StudentSettings';
import ProfessorCreate from '../pages/Admin/Professor/ProfessorCreate/ProfessorCreate';
import ProfessorEdit from '../pages/Admin/Professor/professorEdit/ProfessorEdit';
import StudentCreate from '../pages/Admin/student/studentCreate/StudentCreate';
import StudentEdit from '../pages/Admin/student/studentEdit/StudentEdit';
import SessionCreate from '../pages/Admin/session/sessionCreate/SessionCreate';
import SessionEdit from '../pages/Admin/session/sessionEdit/SessionEdit';
import CourseCreate from '../pages/Admin/course/courseCreate/CourseCreate';
import CourseEdit from '../pages/Admin/course/courseEdit/CourseEdit';
import TEST from'../pages/TEST';

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/Login' element={<LoginPage/>}/>}/>
            <Route path='/login' element={<LoginPage/>}/>

            <Route path='/professor' element={<Professor/>}/>

            <Route path='/adminSettings' element={<AdminSettings/>}/>

            <Route path='/professorCreate' element={<ProfessorCreate/>}/>
            <Route path='/professorEdit' element={<ProfessorEdit/>}/>

            <Route path='/studentCreate' element={<StudentCreate/>}/> 
            <Route path='/StudentEdit' element={<StudentEdit/>}/>


            <Route path='/SessionCreate' element={<SessionCreate/>}/>
            <Route path='/SessionEdit' element={<SessionEdit/>}/>

            <Route path='/CourseCreate' element={<CourseCreate/>}/>
            <Route path='/CourseEdit' element={<CourseEdit/>}/>
     
        

            <Route path='/studentSettings' element={<StudentSettings/>}/>
            <Route path='/test' element={<TEST/>}/>        
        </Routes>
    )
}

export default Router;
