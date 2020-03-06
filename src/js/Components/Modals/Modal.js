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
		  <h4>Centered Modal</h4>
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
  

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import SignIn from "./SigIn";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>
          <SignIn />
        </p>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" size='lg' block onClick={props.onHide}>
            Sign In
          </Button>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
