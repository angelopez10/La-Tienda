import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import "../Home_principal/main-home.css";
import ModalIngresoProduct from '../Modales/ModalIngresoProduct'
import ButtonToolbar from 'react-bootstrap/Button'
import { Context } from "../../AppContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ff8d1e",
    border: 0,
    borderRadius: '50%',
    ["@media (max-width:600px)"]: {
      width: "120px",
      padding: "0",
    },
    color: "#f5f3f3",
    height: 80,
    padding: '12px',
    fontSize: '34px',
    width: '80px',
    "&:hover": {
      backgroundColor: "#ff8d1e",
      borderColor: "none",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ff8d1e",
      borderColor: "none",
    },
    "&:focus": {
      backgroundColor: "#ff8d1e",
      boxShadow: "none",
    },
  },
  root2: {
    backgroundColor: "#ff8d1e",
    border: 0,
    borderRadius: '50%',
    color: "#f5f3f3",
    height: 80,
    padding: "0px",
    marginTop: '170px',
    width: '80px',
    "&:hover": {
      backgroundColor: "#ff8d1e",
      borderColor: "none",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#ff8d1e",
      borderColor: "none",
    },
    "&:focus": {
      backgroundColor: "#ff8d1e",
      boxShadow: "none",
    },
  },
  font: {
    fontSize: '24px'
  }
});

export default function AgregarProductoBoton() {
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();
  const { store, actions } = useContext(Context);
  const { currentUser } = store;

  return (
    <ButtonToolbar className={classes.root2} xs={12}>
      <IconButton className={classes.root} onClick={() => setModalShow(true)} xs={12}>
        <AddIcon className={classes.font}/>
      </IconButton>
      <ModalIngresoProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
