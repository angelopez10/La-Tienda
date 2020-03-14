import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles} from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalLogin from "../Modales/ModalLogin";
import logo from './logo_transparent_background.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ff8d1e',
    border: 0,
    borderRadius: 50,
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
      <nav class="navbar navbar-expand-lg static-top py-0 bg-color">
        <div class='container'>
          <Link class="navbar-brand text-link" href="#">
           <img src={logo} alt='' className='logo-principal'/>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
                <ButtonToolbar className={classes.root} >
                  <Button className={classes.root} color='default' onClick={() => setModalShow(true)}>
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
