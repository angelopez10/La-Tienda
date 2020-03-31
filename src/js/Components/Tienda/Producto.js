import React, {useContext} from 'react'
import {Context} from '../../AppContext'
import './producto.css'

export default function Producto(props) {
    const {actions} = useContext(Context);
    return (

        <div class="col-12 col-md-6 col-lg-4 ">
            <div class="card card-style mb-2">
                <img class="card-img-top" src="https://picsum.photos/600/400" alt="Card image cap" />
                <div class="card-body card-bg">
                    <h4 class="card-title"><a href="product.html" title="View Product">{props.producto.producto.nombre}</a></h4>
                    <p class="card-text">{props.producto.producto.descripcion}</p>
                    <div class="col">
                        <div class="row">
                            <p class="btn btn-block button-font" id= {props.producto.producto.id} onClick={() => actions.addToCart(props.producto)}>Agregar al carrito ~ ${props.producto.producto.precio}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
