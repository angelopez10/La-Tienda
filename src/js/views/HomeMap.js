import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SideNav} from '../Components/HomeMapa/SideNav'
import SideNavLeft from '../Components/HomeMapa/SideNavLeft'
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo'
import { Context } from '../AppContext';



function HomeMap(props) {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="App">
      <SideNav />
      <SideNavLeft/>
      <SideNavLeftTwo/>
    </div>
  );
}

export default HomeMap;