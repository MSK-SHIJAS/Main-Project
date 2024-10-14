import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for validating login credentials goes here
    // On successful login, redirect to the home page
    window.location.href = '/'; // Change '/home' to the appropriate path
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      {/* <h1 className='text-9xl bg-lime-500 text-slate-700 m-[200px] p-[100px]'>login page</h1> */}
      <Form className="w-50 p-3 border rounded" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
