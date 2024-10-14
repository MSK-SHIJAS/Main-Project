import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Leave = () => {
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle leave submission
    alert(`Leave Requested:\nReason: ${reason}\nDate: ${date}`);
    
    // Clear form fields after submission
    setReason('');
    setDate('');
  };

  return (
    <Container className="mt-4">
      <h2>Leave Request Form</h2>
      <Form onSubmit={handleSubmit}>
        {/* Reason Input */}
        <Form.Group controlId="reasonInput" className="mb-3">
          <Form.Label>Reason for Leave</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the reason for leave"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </Form.Group>

        {/* Date Input */}
        <Form.Group controlId="dateInput" className="mb-3">
          <Form.Label>Leave Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit Leave Request
        </Button>
      </Form>
    </Container>
  );
};

export default Leave;
