import React, { useContext, useEffect} from 'react'
import { Context } from '../AppContext'
import NavbarAdmin from '../Components/TiendaAdmin/NavbarAdmin';
import ProductoAdmin from '../Components/TiendaAdmin/ProductoAdmin';
import AgregarProductoBoton from '../Components/TiendaAdmin/AgregarProductoBoton';




export default function TiendaAdminView(props) {
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        if(!store.isAuthenticated) props.history.push('/');
        if(store.isAuthenticated) actions.setTiendaAdmin();
      },);


     


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
                    <AgregarProductoBoton />
                </div>
            </div>
        </div>
    )
}
