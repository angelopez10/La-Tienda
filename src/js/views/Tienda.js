import React, {useContext} from 'react'
import {Context} from '../AppContext';
import NavbarTienda from '../Components/Tienda/NavbarTienda';
import '../Components/Tienda/producto.css';

import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import Producto from '../Components/Tienda/Producto';
import Categories from '../Components/Tienda/Categories';
import Pagination from '../Components/Tienda/Pagination';



export default function Tienda() {
    const {store: {tiendas}} = useContext(Context);
    return (
        <div>
            {

                tiendas.length > 0 &&
                tiendas.map(tienda => {
                   return <NavbarTienda tienda={tienda}/>
                })
            }
            <div class="container main-position">
                <div class="row">
                    <Categories />
                    <div class="col">
                    <div class="row">
                    {   
                        
                        tiendas.length > 0 &&
                        tiendas.map((tienda) => {
                            console.log(tienda)
                            const productos = tienda.productos.map((producto, i) => {
                                return (
                                    <Producto key={i} producto={producto}/>
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
