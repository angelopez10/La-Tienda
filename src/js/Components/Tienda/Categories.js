import React from 'react'
import './producto.css'

export default function Categories() {
    return (
            <div class="col-12 col-sm-3">
                <div class="card bg-light mb-3">
                    <div class="card-header  categories text-uppercase"><i class="fa fa-list pr-2"></i> Categories</div>
                    <ul class="list-group categories-list category_block">
                        <li class="list-group-item categories-list"><a href="category.html">Cras justo odio</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Dapibus ac facilisis in</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Morbi leo risus</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Porta ac consectetur ac</a></li>
                        <li class="list-group-item categories-list"><a href="category.html">Vestibulum at eros</a></li>
                    </ul>
                </div>
            </div>
    )
}
