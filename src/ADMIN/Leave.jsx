import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';

const Leave = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample leave data
  const leaveRequests = [
    { id: 1, name: 'John Doe', reason: 'Medical', days: 3 },
    { id: 2, name: 'Jane Smith', reason: 'Vacation', days: 5 },
    { id: 3, name: 'Alice Johnson', reason: 'Family Emergency', days: 2 },
    // Add more leave requests if needed
  ];

  // Filter the leave requests based on search term
  const filteredLeaves = leaveRequests.filter((leave) =>
    leave.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leave.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (leaveId) => {
    console.log(`Leave request ${leaveId} approved.`);
    // Add your approve logic here
  };

  return (
    <div className="container">
      <h2 className="my-4">Leave Requests</h2>

      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name or reason..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {/* Leave Requests Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason</th>
            <th>Number of Days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaves.length > 0 ? (
            filteredLeaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.name}</td>
                <td>{leave.reason}</td>
                <td>{leave.days}</td>
                <td>
                  <Button variant="success" onClick={() => handleApprove(leave.id)}>
                    Approve
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No matching leave requests found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Leave;
