import React from 'react'
import NavbarTienda from '../Components/Tienda/NavbarTienda';
import SideMenu from '../Components/Tienda/SideMenu';
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import Producto from '../Components/Tienda/Producto';
import SideNavLeft from '../Components/HomeMapa/SideNavLeft';



export default function Tienda() {
    return (
        <div>
            <NavbarTienda />
            <Producto />
            <SideNavLeftTwo />
            
        </div>
    )
}
