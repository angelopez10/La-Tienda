import React from 'react'

export default function NavbarHome() {
    return (
        <div>
           <nav>
                <div className="nav-wrapper grey lighten-5">
                    <a href="#!" className="brand-logo grey-text text-darken-4">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="waves-effect waves-light red darken-2btn">Iniciar sesión</a></li>
                        <li><a className="waves-effect waves-light red darken-2btn">Registrarse</a></li>
                    </ul>
                </div>
            </nav> 
        </div>
    )
}
