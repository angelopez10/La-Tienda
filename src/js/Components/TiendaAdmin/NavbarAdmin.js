import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarAdmin() {
    return (
        <div>
            <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class='container'>
        <Link to='/' >
        <img src="http://placehold.it/150x50?text=Logo" alt="" />
          
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </Link>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
              <button type="button" class="btn btn-success">Agregar Productos</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        </div>
    )
}
