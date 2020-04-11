import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from 'react-bootstrap/Button'
import "../Home_principal/main-home.css";
import ModalIngresoProduct from '../Modales/ModalIngresoProduct'
import ButtonToolbar from 'react-bootstrap/Button'
import { Context } from "../../AppContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ff8d1e",
    border: 0,
    borderRadius: 50,
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "120px",
      padding: "0",
    },
    color: "#f5f3f3",
    height: 50,
    padding: "0 30px",
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
    borderRadius: 50,
    color: "#f5f3f3",
    height: 50,
    padding: "0 30px",
    marginLeft: "20px",
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
});

export default function AgregarProductoBoton() {
  const [modalShow, setModalShow] = React.useState(false);
  const classes = useStyles();
  const { store, actions } = useContext(Context);
  const { currentUser } = store;

  return (
    <ButtonToolbar className={classes.root} xs={12}>
      <Button
        className={classes.root}
        onClick={() => setModalShow(true)}
        xs={12}
      >
        Agregar productos
      </Button>

      <ModalIngresoProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
