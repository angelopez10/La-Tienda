import React from 'react';
import './SideNav.css';
import SideBar from './SideBar';


  
export default function SideNav() {
    return (
      <div id="App">
        <SideBar />
        <div id="page-wrap">
          <h1>AppDividend</h1>
          <h2>Check out our tutorials the side menubar</h2>
        </div>
      </div>
    );
  }