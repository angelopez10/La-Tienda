import React from 'react'
import './producto.css'

export default function Categories() {
    return (
            <div class="col-12 col-sm-3">
                <div class="card bg-light mb-3">
                    <div class="card-header  categories text-uppercase"><i class="fa fa-list pr-2"></i> Categorias</div>
                    <ul class="list-group categories-list category_block">
                        <li class="list-group-item categories-list"><a href="category.html">Bebidas</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Viveres</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Carnes</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Todos</a></li>
                    </ul>
                </div>
            </div>
    )
}
