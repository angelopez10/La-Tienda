import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../Home_principal/logo_transparent_background.png';
import '../Home_principal/main-home.css';
import './button-color.css';
import { Context } from '../../AppContext';

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
  },
  color: {
    backgroundColor: '#ff8d1e',
    border: 0,
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

function NavbarAdmin(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();
  const {store, actions} = useContext(Context);
  const {currentUser} = store;
  

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-color py-0 static-top">
          <div class='container'>
            <Link to='/' >
              <img src={logo} alt='' className='logo-principal' />
            </Link>
            
            <DropdownButton id="dropdown-basic-button" variant='logout' title={`Bienvenido, ${!!currentUser && currentUser['Tienda']['nombre']}`}>
              <Dropdown.Item onClick={e => actions.logout(e, props.history)}>Cerrar sesión</Dropdown.Item>
              
            </DropdownButton>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(NavbarAdmin);