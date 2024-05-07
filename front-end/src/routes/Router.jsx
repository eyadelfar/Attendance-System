import React from 'react';
import {Routes,createBrowserRouter, Route ,Navigate} from 'react-router-dom';
import LoginPage from'../pages/login/Login';
import Professor from '../pages/admin/professor/professorList/ProfessorList';
import AdminSettings from '../pages/admin/adminSettings/AdminSettings';
import StudentSettings from '../pages/student/studentSettings/StudentSettings';
import ProfessorCreate from '../pages/admin/professor/professorCreate/ProfessorCreate';
import ProfessorEdit from '../pages/admin/professor/professorEdit/ProfessorEdit';
import StudentCreate from '../pages/admin/student/studentCreate/StudentCreate';
import StudentEdit from '../pages/admin/student/studentEdit/StudentEdit';
import SessionCreate from '../pages/admin/session/sessionCreate/LectureCreate';
import SessionEdit from '../pages/admin/session/sessionEdit/LectureEdit';
import CourseCreate from '../pages/admin/course/courseCreate/CourseCreate';
import CourseEdit from '../pages/admin/course/courseEdit/CourseEdit';
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
