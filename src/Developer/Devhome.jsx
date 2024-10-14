import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Devhome = () => {
  // Sample Data for Projects
  const allProjects = [
    { id: 1, name: 'Project A', status: 'completed' },
    { id: 2, name: 'Project B', status: 'pending' },
    { id: 3, name: 'Project C', status: 'completed' },
    { id: 4, name: 'Project D', status: 'pending' },
  ];

  // Separate pending and completed projects
  const pendingProjects = allProjects.filter(project => project.status === 'pending');
  const completedProjects = allProjects.filter(project => project.status === 'completed');

  return (
    <Container className="mt-4">
      <h2>All Projects</h2>

      {/* All Projects in Cards */}
      <Row>
        {allProjects.map((project) => (
          <Col key={project.id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>Status: {project.status.charAt(0).toUpperCase() + project.status.slice(1)}</Card.Text>
               <Link to='/developer/devproject'> <Button variant="primary">View Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pending Projects */}
      <h3 className="mt-5">Pending Projects</h3>
      <Row>
        {pendingProjects.length > 0 ? (
          pendingProjects.map((project) => (
            <Col key={project.id} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>Status: Pending</Card.Text>
                  <Button variant="warning">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No pending projects.</p>
        )}
      </Row>

      {/* Completed Projects */}
      <h3 className="mt-5">Completed Projects</h3>
      <Row>
        {completedProjects.length > 0 ? (
          completedProjects.map((project) => (
            <Col key={project.id} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>Status: Completed</Card.Text>
                  <Button variant="success">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No completed projects.</p>
        )}
      </Row>
    </Container>
  );
};

export default Devhome;
