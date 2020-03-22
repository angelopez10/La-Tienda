import React from 'react'
import './producto.css'

export default function Categories(props) {
  return (
        
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card card-style mb-2">
                        <img class="card-img-top" src="https://picsum.photos/600/400" alt="Card image cap"/>
                        <div class="card-body card-bg">
                            <h4 class="card-title"><a href="product.html" title="View Product">Product title</a></h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="col">
                                <div class="row">
                                    <p class="btn btn-danger btn-block">99.00 $</p>
                                </div>
                                <div class="row">
                                    <a href="#" class="btn btn-success btn-block">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
