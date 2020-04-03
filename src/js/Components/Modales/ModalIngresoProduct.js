import React from "react";
import Modal from 'react-bootstrap/Modal'
import Paper from '@material-ui/core/Paper';
import RegistroFormProduct from "../RegistrationForm/RegistroFormProduct";





export default function ModalIngresoProduct(props) {
	return (
	  <Modal
		{...props}
		size="md"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		     
		<Modal.Body>
            <p>
			<Paper >
			  <RegistroFormProduct />
			</Paper >
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
