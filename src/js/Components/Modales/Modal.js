import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import RegistrationForm from '../RegistrationForm/RegistrationForm';





export default function MyVerticallyCenteredModal(props) {
	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="contained-modal-title-vcenter">
			Modal heading
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  <p>
			  <RegistrationForm />
		  </p>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
  }
  
