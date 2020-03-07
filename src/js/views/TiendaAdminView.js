import React from 'react'
import NavbarTienda from '../Components/Tienda/NavbarTienda';
import Producto from '../Components/Tienda/Producto';
import TiendaAdmin from '../Components/TiendaAdmin/TiendaAdmin';




export default function TiendaAdminView() {
    return (
        <div>
            <NavbarTienda />
            <TiendaAdmin />
            
        </div>
    )
}
