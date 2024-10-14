import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ClientReg = () => {

const navigate=useNavigate()
const handlelogin=()=>{
    navigate('/login')
}


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form className="w-50 p-3 border rounded">
        <Form.Group className="mb-3" controlId="formClientName">
          <Form.Label>Client Name</Form.Label>
          <Form.Control type="text" placeholder="Enter client's name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter project name or description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
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
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default ClientReg;
