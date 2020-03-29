import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'
import MyVerticallyCenteredModal from '../Components/Modales/Modal';







function ModalView() {
	const [modalShow, setModalShow] = React.useState(false);
	return (
	  <ButtonToolbar>
		<Button variant="primary" onClick={() => setModalShow(true)}>
		  Launch vertically centered modal
		</Button>
  
		<MyVerticallyCenteredModal
		  show={modalShow}
		  onHide={() => setModalShow(false)}
		/>
	  </ButtonToolbar>
	);
  }
  

export default ModalView;