import React, { useState } from 'react';
import { Button, Container, Table, Modal, Form, Row, Col } from 'react-bootstrap';

const Developers = () => {
  const [developers, setDevelopers] = useState([
    { name: 'John Doe', role: 'Frontend Developer', status: 'pending' },
    { name: 'Jane Smith', role: 'Backend Developer', status: 'pending' },
    { name: 'Michael Johnson', role: 'Fullstack Developer', status: 'pending' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [project, setProject] = useState('');
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  // Example project list for the dropdown
  const projects = ['Project Alpha', 'Project Beta', 'Project Gamma'];

  // Filter developers based on search term
  const filteredDevelopers = developers.filter((dev) =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Accept Developer
  const handleAccept = (index) => {
    const updatedDevelopers = [...developers];
    updatedDevelopers[index].status = 'accepted';
    setDevelopers(updatedDevelopers);
  };

  // Handle Reject Developer
  const handleReject = (index) => {
    const updatedDevelopers = [...developers];
    updatedDevelopers[index].status = 'rejected';
    setDevelopers(updatedDevelopers);
  };

  // Show Assign Modal
  const handleShowAssignModal = (developer) => {
    setSelectedDeveloper(developer);
    setShowAssignModal(true);
  };

  // Handle Modal Close
  const handleCloseModal = () => {
    setShowAssignModal(false);
    setTask('');
    setDeadline('');
    setProject('');
  };

  // Handle Assign Task
  const handleAssignTask = () => {
    // Logic for assigning task
    alert(`Assigned ${task} for ${selectedDeveloper.name} with deadline ${deadline} on ${project}`);
    handleCloseModal();
  };

  return (
    <Container className="mt-4">
      <h2>Developers</h2>

      {/* Search Bar */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search Developers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      {/* Developers Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevelopers.map((developer, index) => (
            <tr key={index}>
              <td>{developer.name}</td>
              <td>{developer.role}</td>
              <td>{developer.status}</td>
              <td>
                {developer.status === 'pending' && (
                  <>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => handleAccept(index)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleReject(index)}
                    >
                      Reject
                    </Button>
                  </>
                )}
                {developer.status === 'accepted' && (
                  <Button
                    variant="primary"
                    onClick={() => handleShowAssignModal(developer)}
                  >
                    Assign Task
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Assign Task Modal */}
      <Modal show={showAssignModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task to {selectedDeveloper?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="projectSelect">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                as="select"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              >
                <option value="">Select Project</option>
                {projects.map((proj, idx) => (
                  <option key={idx} value={proj}>
                    {proj}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="taskInput" className="mt-3">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="deadlineInput" className="mt-3">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAssignTask}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Developers;
