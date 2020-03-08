import React from "react";
import Modal from 'react-bootstrap/Modal'
import RegistFormTienda from "../RegistrationForm/RegistFormTienda";





export default function ModalFormuTienda(props) {
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
			  <RegistFormTienda />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
