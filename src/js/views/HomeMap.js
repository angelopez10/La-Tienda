import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mapa from '../Components/HomeMapa/Mapa'
import SideNav from '../Components/HomeMapa/SideNav'
import SideNavLeft from '../Components/HomeMapa/SideNavLeft'
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo'





function HomeMap() {
  return (
    <div className="App">

    <Mapa />
    <SideNav />
    <SideNavLeft />
    <SideNavLeftTwo />

    </div>
  );
}

export default HomeMap;