import React, {useContext, useEffect} from 'react';
import {Context} from '../AppContext';
import NavbarHome from '../Components/Home_principal/NavbarHome'
import MainHome from '../Components/Home_principal/MainHome'
import FooterHome from '../Components/Home_principal/FooterHome'

export default function Home(props) {
  const {store} = useContext(Context);



    return (
        <div>
          <NavbarHome />
          <MainHome />
          <FooterHome />
        </div>
    )
}
