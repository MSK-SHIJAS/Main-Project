import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ClientFeedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleReply = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleSend = () => {
    // Handle send feedback logic here
    console.log('Feedback sent for:', selectedClient);
    setShowModal(false);
  };

  const feedbackData = [
    { id: 1, clientName: 'Client A', projectName: 'Project Alpha', feedback: 'Great work!' },
    { id: 2, clientName: 'Client B', projectName: 'Project Beta', feedback: 'Needs improvement.' }
    // Add more data as needed
  ];

  return (
    <div className="container">
      <h2 className="my-4">Client Feedback</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Project Name</th>
            <th>Feedback</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((item) => (
            <tr key={item.id}>
              <td>{item.clientName}</td>
              <td>{item.projectName}</td>
              <td>{item.feedback}</td>
              <td>
                <Button variant="primary" onClick={() => handleReply(item)}>Reply</Button>{' '}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Reply */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to {selectedClient?.clientName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="feedbackReply">
            <Form.Label>Write your reply:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ClientFeedback;
