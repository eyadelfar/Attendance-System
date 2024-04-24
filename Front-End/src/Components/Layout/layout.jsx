// Layout.js
import React from 'react';
import './layout.css';
import Router from '../../routes/Router';
import Sidebar from '../Sidebar/sidebar';
import Topbar from '../topbar/topbar'; // Capitalized component name
import Auth from '../../helper/Storage';
const auth = Auth.getAuthUser();

const Layout = () => {
  return (
    <div className="Layout">
      {/* {auth && (<Sidebar/>)} */}
       {/* Corrected component name and syntax */}
      <Sidebar />
      
      <div className="main_layout">
      <Topbar />
        {/* {auth && (<Topbar/>)} */}

        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;

