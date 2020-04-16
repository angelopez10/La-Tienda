import React from "react";
import Modal from 'react-bootstrap/Modal'
import EditarProducto from "../RegistrationForm/EditarProducto";
import Alert from '@material-ui/lab/Alert';





export default function ModalEditarProducto(props) {
	return (
	  <Modal
		{...props}
		size="md"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		  <Alert severity="info">No es necesario editar todos los campos!</Alert>
		<Modal.Body>
            <p>
			  <EditarProducto producto={props.producto}/>
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
 