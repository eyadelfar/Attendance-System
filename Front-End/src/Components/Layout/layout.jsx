// Layout.js
import React from 'react';
import './Layout.css';
import Router from '../../routes/Router';
import SideBar from '../sideBar/SideBar'; // Capitalized component name
import Topbar from '../topBar/TopBar'; // Capitalized component name
import Auth from '../../helper/Storage';
const auth = Auth.getAuthUser();

const Layout = () => {
  return (

    <div className="page-container">
      <div className="top-bar" style={{ gridArea: 'top-bar' }}><Topbar /></div>
      <div className="sidebar" style={{ gridArea: 'sidebar' }}><SideBar /></div>
      <div className="container" style={{ gridArea: 'container' }}><Router /></div>
    </div>
  );
};

export default Layout;