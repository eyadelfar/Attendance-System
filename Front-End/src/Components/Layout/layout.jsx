// Layout.js
import React from 'react';
// import './Layout.css';
import Router from '../../routes/Router';
import SideBar from '../sideBar/Sidebar'; // Capitalized component name
import Topbar from '../topBar/Topbar'; // Capitalized component name
import Auth from '../../helper/Storage';
const auth = Auth.getAuthUser();

const Layout = () => {
  return (
    <div className="Layout">
      {/* {auth && (<Sidebar/>)} */}
       {/* Corrected component name and syntax */}
       <Topbar />
     
      
      <div className="main_layout">
      <SideBar />
       


        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;

