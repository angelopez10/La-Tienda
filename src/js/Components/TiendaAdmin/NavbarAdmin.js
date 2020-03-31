import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles} from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalIngresoProduct from '../Modales/ModalIngresoProduct'
import logo from '../Home_principal/logo_transparent_background.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 50,
    color: '#f5f3f3',
    height: 50,
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
  root2: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 50,
    color: '#f5f3f3',
    height: 50,
    padding: '0 30px',
    marginLeft: '20px',
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
  }
  
});

export default function NavbarAdmin() {
    const [modalShow, setModalShow] = React.useState(false);
    const classes = useStyles();
    
    return (
        <div>
            <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
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
              <ButtonToolbar className={classes.root2}>
                  <Button variant="primary" className={classes.root} onClick={() => setModalShow(true)}>
                    Agregar productos
		              </Button>

                  <ModalIngresoProduct
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </ButtonToolbar>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        </div>
    )
}
