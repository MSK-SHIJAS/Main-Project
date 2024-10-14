import React, { useState } from 'react';
import { Table, ProgressBar, Button, Container, Modal, Form } from 'react-bootstrap';

const Dashboard = () => {
  // Example data for the projects
  const [projects, setProjects] = useState([
    { name: 'Project Alpha', leader: 'John Doe', progress: 80, deadline: '2024-09-30' },
    { name: 'Project Beta', leader: 'Jane Smith', progress: 50, deadline: '2024-10-15' },
    { name: 'Project Gamma', leader: 'Michael Johnson', progress: 30, deadline: '2024-11-01' },
  ]);

  // State for showing progress
  const [showProgress, setShowProgress] = useState({});
  
  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [message, setMessage] = useState('');

  const handleShowProgress = (index) => {
    setShowProgress((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSendMessage = (projectName) => {
    setSelectedProject(projectName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessage('');
  };

  const handleSend = () => {
    // Replace this with your message sending logic
    alert(`Message sent for ${selectedProject}: ${message}`);
    handleCloseModal();
  };

  return (
    <Container className="mt-5">
      <h3>Project Dashboard</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Team Leader Name</th>
            <th>Deadline</th>
            <th>Show Progress</th>
            <th>Send Message</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.leader}</td>
              <td>{project.deadline}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleShowProgress(index)}
                >
                  {showProgress[index] ? 'Hide Progress' : 'Show Progress'}
                </Button>
                {showProgress[index] && (
                  <ProgressBar
                    now={project.progress}
                    label={`${project.progress}%`}
                    className="mt-2"
                  />
                )}
              </td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleSendMessage(project.name)}
                >
                  Send Message
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Sending Message */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message to {selectedProject}</Modal.Title>
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
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;
