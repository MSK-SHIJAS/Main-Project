import React from 'react';
import { Navbar, Form, FormControl, Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
// Assuming you have images in your 'assets' folder
import createProjectImage from './KANBAN.jpg'; // Example image path
import teamsImage from './team.jpg'; // Example image path

const Home = () => {
  const navigate = useNavigate();

  // Example data for the pie chart (progress of multiple projects)
  const pieChartData = [
    { title: 'Completed', value: 60, color: '#4caf50' },
    { title: 'In Progress', value: 30, color: '#ff9800' },
    { title: 'Pending', value: 10, color: '#f44336' },
  ];

  return (
    <div>

      {/* Dashboard Cards */}
      <Container className="mt-5">
        <Row className="g-4 justify-content-center">
          {/* Card 1: Project Progress (Pie Chart) */}
          <Col xs={12} sm={6} md={4}>
            <Card className="h-100" style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
              <Card.Body className="text-center">
                <Card.Title>Project Progress</Card.Title>
                <PieChart
                  data={pieChartData}
                  label={({ dataEntry }) => `${dataEntry.value}%`}
                  labelStyle={{
                    fontSize: '5px',
                    fontWeight: 'bold',
                  }}
                  lineWidth={40}
                  animate
                />
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2: Create Project with Image */}
          <Col xs={12} sm={6} md={4}>
            <Card className="h-100" style={{ cursor: 'pointer' }} onClick={() => navigate('/createproject')}>
              <Card.Img variant="top" src={createProjectImage} alt="Create Project" /> {/* Image */}
              <Card.Body className="text-center">
                <Card.Title>Create Project</Card.Title>
                <Card.Text>
                  Click here to create a new project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3: Teams with Image */}
          <Col xs={12} sm={6} md={4}>
            <Card className="h-100" style={{ cursor: 'pointer' }} onClick={() => navigate('/invite')}>
              <Card.Img variant="top" src={teamsImage} alt="Teams" /> {/* Image */}
              <Card.Body className="text-center">
                <Card.Title>Teams</Card.Title>
                <Card.Text>
                  View and manage team members.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
