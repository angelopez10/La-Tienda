import React, { useContext, useEffect } from 'react'
import { Context } from '../AppContext'
import NavbarAdmin from '../Components/TiendaAdmin/NavbarAdmin';
import ProductoAdmin from '../Components/TiendaAdmin/ProductoAdmin';
import AgregarProductoBoton from '../Components/TiendaAdmin/AgregarProductoBoton';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';




export default function TiendaAdminView(props) {
    const { store, actions } = useContext(Context);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (!store.isAuthenticated) props.history.push('/');
        if (store.isAuthenticated) actions.setTiendaAdmin();
        if(!!store.productoAgregado) setOpen(true);
        if(!!store.deletedProduct) setOpen(true);
        if(!!store.productoEditado) setOpen(true);
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        actions.deleteErrors();
        setOpen(false);
    };

   



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
            {
                !!store.productoAgregado && (

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={handleClose} severity="success">
                            {store.productoAgregado}
                        </Alert>
                    </Snackbar>
                )
                
            }
            {
                !!store.deletedProduct && (

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={handleClose} severity="success">
                            {store.deletedProduct}
                        </Alert>
                    </Snackbar>
                )
                
            }
            {
                !!store.productoEditado && (

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={handleClose} severity="success">
                            {store.productoEditado}
                        </Alert>
                    </Snackbar>
                )
                
            }
        </div>
    )
}
