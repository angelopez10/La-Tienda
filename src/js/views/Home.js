import React from 'react'

export default function Home() {
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
            <img className="responsive-img" src="https://images.pexels.com/photos/709838/pexels-photo-709838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Trabaja con nosotros!</a>
            </div>
          </div>
        </footer>
        </div>
    )
}
