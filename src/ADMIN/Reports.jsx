import React, { useState } from 'react';
import { Table, Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // Sample data
  const reportData = [
    { id: 1, developerName: 'Dev A', projectName: 'Project Alpha', message: 'Issue in Module X' },
    { id: 2, developerName: 'Dev B', projectName: 'Project Beta', message: 'Code review pending' },
    // Add more sample reports as needed
  ];

  const handleReply = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleSend = () => {
    // Handle sending reply logic
    console.log('Reply sent for:', selectedReport);
    setShowModal(false);
  };

  // Filter the report data based on search term
  const filteredReports = reportData.filter((report) =>
    report.developerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="my-4">Reports</h2>

      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by developer, project, or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {/* Reports Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Developer Name</th>
            <th>Project Name</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.developerName}</td>
                <td>{report.projectName}</td>
                <td>{report.message}</td>
                <td>
                  <Button variant="primary" onClick={() => handleReply(report)}>
                    Reply
                  </Button>{' '}
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No matching reports found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Reply Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to {selectedReport?.developerName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="replyMessage">
            <Form.Label>Write your reply:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Reports;
