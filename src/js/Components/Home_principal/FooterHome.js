import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalIngresoTienda from "../Modales/ModalIngresoTienda";




export default function FooterHome() {
  const [modalShow, setModalShow] = React.useState(false);



  return (
    <div>
      <footer id="footer">
        <div className="main-footer widgets-dark typo-light">
          <div className="container pt-3">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-6 ">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Trabaja con nosotros<span></span>
                  </h5>
                  <p>Accede a nuestra red de tiendas e incrementa tus ganancias</p>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-6  pl-5 '>
                <ButtonToolbar>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Trabaja con Nosotros
		                </Button>
                  <ModalIngresoTienda
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </ButtonToolbar>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright La Tienda © 2020. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
