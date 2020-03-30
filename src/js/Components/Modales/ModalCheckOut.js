import React from "react";
import Modal from 'react-bootstrap/Modal'
import CheckOut from "../ComponentesParaModal/CheckOut";





export default function ModalIngresoTienda(props) {
	return (
	  <Modal
		{...props}
		size="xd"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header >
		</Modal.Header>
		<Modal.Body>
            <p>
			  <CheckOut />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
