import React from "react";
import Modal from 'react-bootstrap/Modal'
import IngresoTienda from "../RegistrationForm/IngresoTienda";





export default function ModalIngresoTienda(props) {
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
			  <IngresoTienda />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
