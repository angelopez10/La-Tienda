import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sphere from '../Components/Sphere/Sphere';
import MapNavBar from '../Components/HomeMapa/MapNavBar'
import Mapa from '../Components/HomeMapa/Mapa'
import SideBar from '../Components/HomeMapa/SideBar'
import SideNav from '../Components/HomeMapa/SideNav'
import SideNavLeft from '../Components/HomeMapa/SideNavLeft'
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo'





function HomeMap() {
  return (
    <div className="App">
      <Sphere />

    <Mapa />
    <SideBar />
    <SideNav />
    <SideNavLeft />
    <SideNavLeftTwo />



    </div>
  );
}

export default HomeMap;