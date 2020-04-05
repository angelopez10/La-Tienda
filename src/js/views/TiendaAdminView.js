import React, { useContext} from 'react'
import { Context } from '../AppContext'
import NavbarAdmin from '../Components/TiendaAdmin/NavbarAdmin';
import ProductoAdmin from '../Components/TiendaAdmin/ProductoAdmin';




export default function TiendaAdminView(props) {
    const { store } = useContext(Context);
    return (
        <div>
            <NavbarAdmin />
            <div class="container mt-5 main-position">
                <div class="row">
                    {
                        store.productos.map((producto, i) => {

                            return (
                                <ProductoAdmin key={i} producto={producto} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
