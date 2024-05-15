import React from 'react';
import {Routes, Route ,Navigate } from 'react-router-dom';
import LoginPage from'../pages/login/Login';
import ProfessorList from '../pages/admin/professor/professorList/ProfessorList';
import StudentList from '../pages/admin/student/studentList/StudentList';
import AdminSettings from '../pages/admin/adminSettings/AdminSettings';
import StudentSettings from '../pages/student/studentSettings/StudentSettings';
import ProfessorCreate from '../pages/admin/professor/professorCreate/ProfessorCreate';
import ProfessorEdit from '../pages/admin/professor/professorEdit/ProfessorEdit';
import StudentCreate from '../pages/admin/student/studentCreate/StudentCreate';
import StudentEdit from '../pages/admin/student/studentEdit/StudentEdit';
import LectureList from '../pages/admin/lecture/lectureList/LectureList';
import LectureCreate from '../pages/admin/lecture/lectureCreate/LectureCreate';
import LectureEdit from '../pages/admin/lecture/lectureEdit/LectureEdit';
import CourseCreate from '../pages/admin/course/courseCreate/CourseCreate';
import CourseList from '../pages/admin/course/courseList/CourseList';
import CourseEdit from '../pages/admin/course/courseEdit/CourseEdit';
import Register from '../pages/admin/register/Register';
import CourseListStudent from '../pages/student/course/CourseList';
import LectureListStudent from '../pages/student/lecture/LectureList';
import TEST from'../pages/TEST';

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/Login' element={<LoginPage/>}/>}/>
            <Route path='/login' element={<LoginPage/>}/>

            <Route path='/professorList' element={<ProfessorList/>}/>

            <Route path='/StudentList' element={<StudentList/>}/>

            <Route path='/adminSettings' element={<AdminSettings/>}/>

            <Route path='/professorCreate' element={<ProfessorCreate/>}/>
            <Route path='/professorEdit' element={<ProfessorEdit/>}/>

            <Route path='/studentCreate' element={<StudentCreate/>}/> 
            <Route path='/StudentEdit' element={<StudentEdit/>}/>


            <Route path='/LectureCreate' element={<LectureCreate/>}/>
            <Route path='/LectureList' element={<LectureList/>}/>
            <Route path='/LectureEdit' element={<LectureEdit/>}/>

            <Route path='/CourseCreate' element={<CourseCreate/>}/>
            <Route path="/CourseEdit" element={<CourseEdit/>} />
            <Route path='/CourseList' element={<CourseList/>}/>
        
            <Route path='/Register' element={<Register/>}/>
            <Route path='/studentSettings' element={<StudentSettings/>}/>
            <Route path='/CourseListStudent' element={<CourseListStudent/>}/>
            <Route path='/LectureListStudent' element={<LectureListStudent/>}/>
            <Route path='/test' element={<TEST/>}/>        
        </Routes>
    )
}

export default Router;
