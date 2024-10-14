import React, { useState } from 'react';
import { Form, Button, Table, Modal, Container } from 'react-bootstrap';

const Invite = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [role, setRole] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (member) => {
    setSelectedMember(member);
    setShow(true);
  };

  return (
    <Container className="my-4">
      <Form className="mb-4">
        {/* Email input field */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email to invite" />
        </Form.Group>
        
        {/* Send button */}
        <Button variant="primary" type="submit" className="mt-2">
          Send
        </Button>
      </Form>

      {/* Search area */}
      <Form.Group controlId="formSearch" className="mb-4">
        <Form.Control type="text" placeholder="Search members..." />
      </Form.Group>

      {/* Members list table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Assign</th>
          </tr>
        </thead>
        <tbody>
          {/* Example member data */}
          <tr>
            <td>John Doe</td>
            <td>Front-end Developer</td>
            <td>
              <Button variant="success" onClick={() => handleShow('John Doe')}>
                Assign
              </Button>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Back-end Developer</td>
            <td>
              <Button variant="success" onClick={() => handleShow('Jane Smith')}>
                Assign
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Modal for assigning project and role */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Project and Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formRole" className="mt-3">
              <Form.Label>Role</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter role for the member"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { /* Handle assign logic */ }}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Invite;
