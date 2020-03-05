import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from '../Components/Modals/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'







function ModalView() {
	const [modalShow, setModalShow] = React.useState(false);
  
	return (
	  <ButtonToolbar>
		<Button variant="primary" onClick={() => setModalShow(true)}>
		  Launch vertically centered modal
		</Button>
  
		<SignIn
		  show={modalShow}
		  onHide={() => setModalShow(false)}
		/>
	  </ButtonToolbar>
	);
  }
  

export default ModalView;