import React from "react";
import Modal from 'react-bootstrap/Modal'
import RegistFormCliente from "../RegistrationForm/RegistFormCliente";






export default function MyVerticallyCenteredModal(props) {
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
			  <RegistFormCliente />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
