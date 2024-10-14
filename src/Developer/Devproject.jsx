import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';

const Devproject = () => {
  // Example project data
  const project = {
    name: 'Project X',
    deadline: '2024-10-15',
    details: 'This project is about building a web platform.',
  };

  // Timer state for tracking working time (in seconds)
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // To track if the timer is running
  const [message, setMessage] = useState(''); // State to manage the message input
  const [sentMessage, setSentMessage] = useState(null); // State to store the sent message
  let timerInterval;

  // Start or Stop the timer based on the state of isRunning
  useEffect(() => {
    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(timerInterval);
  }, [isRunning]);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true); // Start the timer
  };

  const handleStop = () => {
    setIsRunning(false); // Stop the timer
  };

  const handleRestart = () => {
    setIsRunning(false); // Stop the timer
    setTimer(0); // Reset the timer to 0
  };

  // Handle message submission
  const handleMessageSend = () => {
    if (message.trim()) {
      setSentMessage(message); // Store the sent message
      console.log('Message Sent:', message); // You can replace this with a real sending logic (API call)
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <Container className="mt-4">
      <h2>View Project</h2>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>Deadline: {project.deadline}</Card.Text>
          <Card.Text>{project.details}</Card.Text>
          <Button variant="primary">View Details</Button>

          {/* Timer display */}
          <div className="mt-3">
            <h5>Working Time: {formatTime(timer)}</h5>
          </div>

          {/* Start, Stop, and Restart Buttons */}
          <div className="mt-3">
            <Button
              variant="success"
              onClick={handleStart}
              disabled={isRunning} // Disable Start button when the timer is running
            >
              Start
            </Button>{' '}
            <Button
              variant="danger"
              onClick={handleStop}
              disabled={!isRunning} // Disable Stop button when the timer is not running
            >
              Stop
            </Button>{' '}
            <Button
              variant="warning"
              onClick={handleRestart}
              disabled={timer === 0} // Disable Restart if the timer is already at 0
            >
              Restart
            </Button>
          </div>

          {/* Message input and Send button */}
          <div className="mt-4">
            <Form>
              <Form.Group controlId="messageInput">
                <Form.Label>Send Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Update message state on input change
                />
              </Form.Group>
              <Button
                variant="primary"
                className="mt-2"
                onClick={handleMessageSend} // Trigger message send on button click
              >
                Send Message
              </Button>
            </Form>

            {/* Display sent message */}
            {sentMessage && (
              <div className="mt-3">
                <h5>Last Message Sent:</h5>
                <p>{sentMessage}</p>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Devproject;
