import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('Admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending the message
    alert(`Message sent to ${recipient}:\n"${message}"`);

    // Clear the message input after sending
    setMessage('');
  };

  return (
    <Container className="mt-4">
      <h2>Send Message</h2>
      <Form onSubmit={handleSubmit}>
        {/* Message Input */}
        <Form.Group controlId="messageInput" className="mb-3">
          <Form.Label>Type your message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Messages;
