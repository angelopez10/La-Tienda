import React from "react";
import Modal from 'react-bootstrap/Modal'
import EditarProducto from "../RegistrationForm/EditarProducto";





export default function ModalEditarProducto(props) {
	return (
	  <Modal
		{...props}
		size="md"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		</Modal.Header>
		<Modal.Body>
            <p>
			  <EditarProducto producto={props.producto}/>
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
 