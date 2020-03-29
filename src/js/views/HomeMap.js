import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Mapa from '../Components/HomeMapa/Mapa'
import {SideNav} from '../Components/HomeMapa/SideNav'
import SideNavLeft from '../Components/HomeMapa/SideNavLeft'
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo'
import MapaMapBox from '../Components/HomeMapa/MapaMapBox';
import DarkMode from '../Components/HomeMapa/DarkMode';
import { Context } from "../AppContext";








function HomeMap() {
  const { store} = useContext(Context);

  

 
  return (
    <div className="App">

      < MapaMapBox data= {store.checked}/>
      <SideNav />
      <SideNavLeft/>
      <SideNavLeftTwo />
      <DarkMode />

    </div>
  );
}

export default HomeMap;