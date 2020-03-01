import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from '../Components/HomeMapa/Mapa';

import SideNavLeft from '../Components/HomeMapa/SideNavLeft';
import SideNav from '../Components/HomeMapa/SideNav';




function HomeMap() {
  return (
    <div className="App">
      <SideNav />
      <SideNavLeft />
       <SimpleMap />
    </div>
  );
}

export default HomeMap;