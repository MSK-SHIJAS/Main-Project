import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';

const Devdashboard = () => {
  // Example data for the pie chart (working time in hours)
  const data = [
    { title: 'Project Alpha', value: 120, color: '#E38627' },
    { title: 'Project Beta', value: 90, color: '#C13C37' },
    { title: 'Project Gamma', value: 150, color: '#6A2135' },
  ];

  // Total time calculation (for displaying under the pie chart)
  const totalTime = data.reduce((acc, project) => acc + project.value, 0);

  return (
    <Container className="mt-5">
      <h3 className="text-center">Working Time Breakdown</h3>

      <Card className="p-3 mt-3" style={{width:"200px"}}>
        {/* Pie chart component */}
        <PieChart
          data={data}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          labelStyle={{ fontSize: '5px', fontWeight: 'bold', fill: '#fff' }}
          lineWidth={20}
          animate
        />
        <p className="mt-3 text-center">
          Total Working Time: {totalTime} hrs
        </p>
      </Card>
    </Container>
  );
};

export default Devdashboard;
