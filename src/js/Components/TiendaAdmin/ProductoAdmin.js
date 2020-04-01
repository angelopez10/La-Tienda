import React, { useContext } from 'react';
import { Context } from '../../AppContext'
import { makeStyles } from '@material-ui/core/styles';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Tienda/producto.css';

const useStyles = makeStyles(() => ({
    textColor: {
        color: '#ff8d1e'
    },
  }));

export default function ProductoAdmin(props) {
    const { actions } = useContext(Context);
    const classes = useStyles();
    return (
        <div className="col-12 col-md-6 col-lg-3 ">
            <div className="card card-style mb-2">
                <img className="card-img-top" src="https://picsum.photos/600/400" alt="Card image cap" />
                <div className="card-body card-bg">
                    <h4 className="card-title"><a href="product.html" title="View Product">{props.producto.producto.nombreProducto}</a></h4>
                    <p className="card-text">Stock: {props.producto.producto.stock}</p>
                    <p className="card-text">Precio: {props.producto.producto.precio}</p>
                    <div className="col">
                        <div className="row float-right">
                            <IconButton aria-label="edit" className={classes.textColor}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.textColor}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
