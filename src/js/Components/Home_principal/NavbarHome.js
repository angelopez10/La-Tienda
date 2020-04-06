import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalLogin from "../Modales/ModalLogin";
import logo from './logo_transparent_background.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 50,
    ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width: '80px',
      padding: '0'
    },
    ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
      
    },
    color: '#f5f3f3',
    height: 40,
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


});




export default function NavbarHome() {
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();


  return (
    <div>
      <nav className="navbar navbar-expand-lg static-top py-0 bg-color">
        <div className='container'>
          <Link className="navbar-brand text-link" to='/'>
            <img src={logo} alt='' className='logo-principal' />
          </Link>
          <ButtonToolbar className={classes.root} xs={12}>
            <Button className={classes.root} color='default' onClick={() => setModalShow(true)} xs={12}>
              Ingresa
		        </Button>
            <ModalLogin
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
        </div>
      </nav>
    </div>
  );
}
