import React from "react";
import Modal from 'react-bootstrap/Modal'
import IngresoTiendaModal from "../ModalCierre/IngresoTiendaModal";





export default function ModalIngresoTienda(props) {
	return (
	  <Modal
		{...props}
		size="md"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Body>
            <p>
			  <IngresoTiendaModal />
		    </p>
		</Modal.Body>
	  </Modal>
	);
  }
  
