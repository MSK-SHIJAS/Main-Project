import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManagerDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedDeveloper, setSelectedDeveloper] = useState('');

  const handleShowModal = (developer) => {
    setSelectedDeveloper(developer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessage('');
  };

  const handleSendMessage = () => {
    // Logic for sending message can be implemented here
    alert(`Message sent to ${selectedDeveloper}: ${message}`);
    handleCloseModal();
  };

  return (
    <div className="container mt-4">
      <h2>Manager Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Developer's Name</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows, replace with dynamic content */}
          <tr>
            <td>Project A</td>
            <td>John Doe</td>
            <td>60%</td>
            <td>
              <Button variant="primary" onClick={() => handleShowModal('John Doe')}>
                Send Message
              </Button>
            </td>
          </tr>
          <tr>
            <td>Project B</td>
            <td>Jane Smith</td>
            <td>80%</td>
            <td>
              <Button variant="primary" onClick={() => handleShowModal('Jane Smith')}>
                Send Message
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Modal for sending message */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message to {selectedDeveloper}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="messageTextarea">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManagerDashboard;
