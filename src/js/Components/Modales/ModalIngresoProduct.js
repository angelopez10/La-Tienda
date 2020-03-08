import React from "react";
import Modal from 'react-bootstrap/Modal'
import RegistroFormProduct from "../RegistrationForm/RegistroFormProduct";





export default function ModalIngresoProduct(props) {
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
			  <RegistroFormProduct />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
