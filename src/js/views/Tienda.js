import React, {useContext} from 'react'
import {Context} from '../AppContext';
import NavbarTienda from '../Components/Tienda/NavbarTienda';

import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import Producto from '../Components/Tienda/Producto';
import Categories from '../Components/Tienda/Categories';
import Pagination from '../Components/Tienda/Pagination';



export default function Tienda() {
    const {store: {tiendas}} = useContext(Context);
    return (
        <div>
            <NavbarTienda />
            <div class="container mt-5">
                <div class="row">
                    <Categories />
                    <div class="col">
                    <div class="row">
                    {   
                        
                        tiendas.length > 0 &&
                        tiendas.map(tienda => {
                            const productos = tienda.productos.map((producto, i) => {
                                return (
                                    <Producto key={i} nombre={producto.nombre} stock={producto.stock} precio={producto.precio}/>
                                )
                            })
                            return productos
                        })
                    }   
                    </div>
                    </div>
                    <Pagination />
                </div>
            </div>
            <SideNavLeftTwo />
        </div>
    )
}
