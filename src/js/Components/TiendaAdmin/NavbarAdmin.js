import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalIngresoProduct from '../Modales/ModalIngresoProduct'
import logo from '../Home_principal/logo_transparent_background.png';
import '../Home_principal/main-home.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 50,
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width: '120px',
      padding: '0',
      
    },
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
        <nav class="navbar navbar-expand-lg bg-color py-0 static-top">
          <div class='container'>
            <Link to='/' >
              <img src={logo} alt='' className='logo-principal' />
            </Link>
                  <ButtonToolbar className={classes.root} xs={12}>
                    <Button  className={classes.root} onClick={() => setModalShow(true)} xs={12}>
                      Agregar productos
		              </Button>

                    <ModalIngresoProduct
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </ButtonToolbar>
          </div>
        </nav>
      </div>
    </div>
  )
}
