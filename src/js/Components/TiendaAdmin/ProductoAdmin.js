import React, { useContext } from 'react';
import { Context } from '../../AppContext'
import ModalEditarProducto from '../Modales/ModalEditarProducto'
import { makeStyles } from '@material-ui/core/styles';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Tienda/producto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(() => ({
    textColor: {
        color: '#ff8d1e'
    },
}));

function ProductoAdmin(props) {
    const { store, actions } = useContext(Context);
    let img = store.baseURL + '/api/producto/' + props.producto.avatar
    const [modalShow, setModalShow] = React.useState(false);
    const classes = useStyles();
    return (
        <div className="col-12 col-md-6 col-lg-3 ">
            <div className="card card-style mb-2">
                <img className="card-img-top" src={img} alt="" width='400px' height='200px' />
                <div className="card-body card-bg">
                    <h4 className="card-title">{props.producto.nombre}</h4>
                    <p className="card-text">{props.producto.descripcion}</p>
                    <p className="card-text">Stock: {props.producto.stock}</p>
                    <p className="card-text">Precio: {props.producto.precio}</p>
                    <div className="col">
                        <div className="row float-right">
                            <ButtonToolbar>
                                <IconButton >
                                        <EditIcon className={classes.textColor} onClick={() => setModalShow(true)} color='default' xs={12}/>
                                    <ModalEditarProducto
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        producto={props.producto}
                                    />
                                </IconButton>
                            </ButtonToolbar>
                            <IconButton aria-label="delete" id={props.producto.id} className={classes.textColor} >
                                <DeleteIcon onClick={e => actions.deleteProducto(e, props.producto.id)} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withRouter(ProductoAdmin);