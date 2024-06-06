import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import moment from 'moment';



const Dashboard = () => {
  return (
    <div className="powerbi-container">
      <iframe className='powerbi'
        title="gp dashboard"
        src="https://app.powerbi.com/reportEmbed?reportId=15bb7554-7f5e-47d6-8a94-f5966c168e5c&autoAuth=true&ctid=aadc0e0a-65ee-471a-99a1-9f86faecbaed"
        frameborder="0"
        allowFullScreen="true"
      />
    </div>
  );
};

export default Dashboard;