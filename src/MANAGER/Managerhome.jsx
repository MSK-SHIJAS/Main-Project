import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Managerhome = () => {
  // Example project data
  const projects = [
    {
      name: 'Project Alpha',
      description: 'This is the first project focused on Alpha features.',
    },
    {
      name: 'Project Beta',
      description: 'This is the second project focusing on Beta development.',
    },
    {
      name: 'Project Gamma',
      description: 'The third project, focusing on Gamma level implementations.',
    },
  ];

  return (
    <Container className="mt-4">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => alert(`Viewing details for ${project.name}`)}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Managerhome;
