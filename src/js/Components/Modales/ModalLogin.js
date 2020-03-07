import React from "react";

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import SignIn from '../ComponentesParaModal/SignIn';





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
			  <SignIn />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
