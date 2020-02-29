import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from '../Components/HomeMapa/Mapa';
import MapNavBar from '../Components/HomeMapa/MapNavBar';
import SideNav from '../Components/HomeMapa/SideNav';



function HomeMap() {
  return (
    <div className="App">
      <MapNavBar />
      <SimpleMap />
      <SideNav />
     

    </div>
  );
}

export default HomeMap;