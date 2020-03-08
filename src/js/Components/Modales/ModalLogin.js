import React from "react";
import Modal from 'react-bootstrap/Modal'
import IngresoCliente from "../RegistrationForm/IngresoCliente";





export default function ModalLogin(props) {
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
			  <IngresoCliente />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
