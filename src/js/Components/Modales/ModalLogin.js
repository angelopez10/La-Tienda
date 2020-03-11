import React from "react";
import Modal from 'react-bootstrap/Modal'
import IngresoClienteModal from "../ModalCierre/IngresoClienteModal";







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
			  <IngresoClienteModal />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
