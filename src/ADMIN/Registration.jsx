import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

const navigate=useNavigate()
const handlelogin=()=>{
    navigate('/invite')
}


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form className="w-50 p-3 border rounded">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control as="select">
            <option>Front-end</option>
            <option>Back-end</option>
            <option>CLIENT</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter a username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <Button className='ms-2'variant="danger" type="login" onClick={handlelogin}>
          INVITE
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
