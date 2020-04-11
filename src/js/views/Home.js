import React, { useEffect, useContext } from 'react';
import NavbarHome from '../Components/Home_principal/NavbarHome'
import MainHome from '../Components/Home_principal/MainHome'
import FooterHome from '../Components/Home_principal/FooterHome'
import { Context } from '../AppContext';

export default function Home(props) {
  const {store, actions} = useContext(Context);
  useEffect(() => {
    if(store.isAuthenticated) props.history.push('/admin');
    
  }, []);
    return (
        <div>
          <NavbarHome />
          <MainHome />
          <FooterHome />
        </div>
    )
}
