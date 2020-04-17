import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../Components/HomeMapa/SideNav'
import SideNavLeft from '../Components/HomeMapa/SideNavLeft'
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo'




function HomeMap(props) {

  
  return (
    <div className="App">
      <SideNav />
      <SideNavLeft/>
      <SideNavLeftTwo/>
    </div>
  );
}

export default HomeMap;