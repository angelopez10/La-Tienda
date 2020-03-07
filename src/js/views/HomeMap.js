import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sphere from '../Components/Sphere/Sphere';






function HomeMap() {
  return (
    <div className="App">
      <Sphere />

    <MapNavBar/>
    <Mapa />
    <SideBar />
    <SideNav />
    <SideNavLeft />
    <SideNavLeftTwo />



    </div>
  );
}

export default HomeMap;