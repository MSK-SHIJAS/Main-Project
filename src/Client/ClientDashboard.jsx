import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart'; // Import the PieChart component

const ClientDashboard = () => {
  // Example data for the pie chart (progress of multiple projects)
  const pieChartData = [
    { title: 'Completed', value: 60, color: '#4caf50' }, // 60% completed
    { title: 'In Progress', value: 30, color: '#ff9800' }, // 30% in progress
    { title: 'Pending', value: 10, color: '#f44336' }, // 10% pending
  ];

  return (
    <Container className="mt-4" style={{width:"550px"}}>
      <h2 className="text-center mb-4">Client Dashboard</h2>

      <Card className="p-4">
        <h4 className="mb-3">Project Progress Overview</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Pie Chart to display project progress */}
          <PieChart
            data={pieChartData}
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`} // Display title and percentage
            labelStyle={{
              fontSize: '5px',
              fontWeight: 'bold',
              fill: '#fff',
            }}
            radius={40}
            animate
          />
        </div>
      </Card>
    </Container>
  );
};

export default ClientDashboard;
