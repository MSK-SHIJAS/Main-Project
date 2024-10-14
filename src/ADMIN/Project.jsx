import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Project = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form className="w-50 p-3 border rounded">
        <Form.Group className="mb-3" controlId="formProjectTitle">
          <Form.Label>Project Title</Form.Label>
          <Form.Control type="text" placeholder="Enter project title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter project instructions" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDeadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Project
        </Button>
      </Form>
    </Container>
  );
};

export default Project;
