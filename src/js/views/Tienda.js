import React, {useContext} from 'react'
import {Context} from '../AppContext';
import NavbarTienda from '../Components/Tienda/NavbarTienda';

import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import Producto from '../Components/Tienda/Producto';
import Categories from '../Components/Tienda/Categories';
import Pagination from '../Components/Tienda/Pagination';



export default function Tienda() {
    const {store: {tiendas}} = useContext(Context);
    console.log(tiendas[0].tienda1.productos)
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
                        tiendas.map((item) =>
                        {   
                            return (
                                <Producto />
                            )
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
