import React from 'react';
import {Routes,createBrowserRouter, Route ,Navigate} from 'react-router-dom';
import Login from'../pages/login/login';
import Professor from '../pages/admin/professor/professor'

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/Login' element={<Login/>}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/professor' element={<Professor/>}/>
        </Routes>
    )
}

export default Router;
