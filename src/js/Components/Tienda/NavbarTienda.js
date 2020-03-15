import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Home_principal/logo_transparent_background.png';

export default function NavbarTienda() {
    return (
        <div>
            <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-color static-top">
        <div class='container'>
        <Link to='/' >
        <img src={logo} alt='' className='logo-principal'/>
          
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
                <a class="nav-link" href="#">
                  Nombre de la tienda
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        </div>
    )
}
