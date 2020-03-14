import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles} from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalIngresoTienda from "../Modales/ModalIngresoTienda";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 5,
    color: '#f5f3f3',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
    },
    '&:focus': {
      backgroundColor: '#ff8d1e',
      boxShadow: 'none'
    },
  },

  position: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 50,
    color: '#f5f3f3',
    height: 48,
    padding: '0 30px',
    marginLeft: '300px',
    '&:hover': {
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ff8d1e',
      borderColor: 'none',
    },
    '&:focus': {
      backgroundColor: '#ff8d1e',
      boxShadow: 'none'
    },
  },
  
});



export default function FooterHome() {
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();


  return (
    <div>
      <footer id="footer" className='bg-color'>
        <div className="main-footer widgets-dark typo-light">
          <div className="container pt-2">
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
                <ButtonToolbar className={classes.position}>
                  <Button  className={classes.root} onClick={() => setModalShow(true)}>
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
              <div className="col-md-12 text-center my-0">
                <p>Copyright La Tienda © 2020. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
