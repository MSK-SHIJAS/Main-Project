import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const ClientHome = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Example project data for the cards
  const projects = [
    {
      title: 'Project Alpha',
      description: 'This project involves building a mobile application for client management.',
      status: 'In Progress',
      route: '/project-alpha', // Route for navigation
    },
    {
      title: 'Project Beta',
      description: 'Development of an e-commerce platform for retail clients.',
      status: 'Completed',
      route: '/project-beta', // Route for navigation
    },
    {
      title: 'Project Gamma',
      description: 'Building a web-based CRM system for client support.',
      status: 'Pending',
      route: '/project-gamma', // Route for navigation
    },
  ];

  // Function to handle card click and navigate to the project's route
  const handleCardClick = (route) => {
    navigate(route); // Navigate to the route when the card is clicked
  };

  return (
    <Container className="mt-5">
      {/* Header */}
      <h1 className="text-center mb-4">Client Home</h1>

      {/* Responsive Cards for Projects */}
      <Row className="g-4 justify-content-center">
        {projects.map((project, index) => (
          <Col xs={12} sm={6} md={4} key={index}>
            <Card 
              className="h-100" 
              style={{ cursor: 'pointer' }} 
              onClick={() => handleCardClick(project.route)} // Add onClick to handle navigation
            >
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text><strong>Status: </strong>{project.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClientHome;
