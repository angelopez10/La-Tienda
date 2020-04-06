import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import ModalLogin from "../Modales/ModalLogin";
import { makeStyles } from '@material-ui/core/styles';



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

export default function MainHome() {
  //Checkear imagen de fondo, usar carpeta img en public
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();
  return (
    <div className="main">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              type="text"
              name=""
              placeholder="Ingresa tu dirección"
            />
            <ButtonToolbar className={classes.root} xs={12}>
              <Button className={classes.root} color='default' onClick={() => setModalShow(true)} xs={12}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <ModalLogin
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </div>
  );
}
