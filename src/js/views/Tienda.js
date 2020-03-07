import React from 'react'
import NavbarTienda from '../Components/Tienda/NavbarTienda';

import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import Producto from '../Components/Tienda/Producto';



export default function Tienda() {
    return (
        <div>
            <NavbarTienda />
            <Producto />
            <SideNavLeftTwo />
            
        </div>
    )
}
