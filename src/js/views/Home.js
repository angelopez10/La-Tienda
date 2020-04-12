import React, { useEffect, useContext } from 'react';
import NavbarHome from '../Components/Home_principal/NavbarHome'
import MainHome from '../Components/Home_principal/MainHome'
import FooterHome from '../Components/Home_principal/FooterHome'
import { Context } from '../AppContext';

export default function Home(props) {
  const {store, actions} = useContext(Context);
  useEffect(() => {
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('Tienda')) props.history.push('/admin');
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('Usuario')) props.history.push('/mapaLigth');
  }, []);
    return (
        <div>
          <NavbarHome />
          <MainHome />
          <FooterHome />
        </div>
    )
}
