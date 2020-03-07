import React from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from '../Modales/ModalLogin';

export default function NavbarHome() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class='container'>
          <Link class="navbar-brand" href="#">
            <img src="http://placehold.it/150x50?text=Logo" alt="" />
          </Link>
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
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <ButtonToolbar>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                  Login
		              </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </ButtonToolbar>
              </li>
              <li class="nav-item">
                <Link class="nav-link" >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
