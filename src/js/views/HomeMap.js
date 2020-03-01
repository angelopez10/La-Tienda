import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from '../Components/HomeMapa/Mapa';
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import SideNavLeft from '../Components/HomeMapa/SideNavLeft';
import SideNav from '../Components/HomeMapa/SideNav';
import Footer from '../Components/HomeMapa/Footer';
import SignIn from '../Components/Modals/SigIn';
import CheckOut from'../Components/Modals/CheckOut';





function HomeMap() {
  return (
    <div className="App">
      <SideNav />
      <SideNavLeft />
      <SideNavLeftTwo />
      <SimpleMap />
      <Footer />
      <SignIn />
      <CheckOut />
     
    </div>
  );
}

export default HomeMap;