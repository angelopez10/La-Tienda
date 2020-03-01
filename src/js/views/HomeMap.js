import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from '../Components/HomeMapa/Mapa';
import SideNav from '../Components/HomeMapa/SideNav';



function HomeMap() {
  return (
    <div className="App">
      <SimpleMap />
      <SideNav />
    </div>
  );
}

export default HomeMap;