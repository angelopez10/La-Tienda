import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
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