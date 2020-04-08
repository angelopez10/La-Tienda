import React, { useContext, useEffect} from 'react'
import { Context } from '../AppContext'
import NavbarAdmin from '../Components/TiendaAdmin/NavbarAdmin';
import ProductoAdmin from '../Components/TiendaAdmin/ProductoAdmin';




export default function TiendaAdminView(props) {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        
        actions.setTiendaAdmin();
      }, [store.productoAgregado, store.productoEliminado]);
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
