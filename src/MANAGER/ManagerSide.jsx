import React from 'react';
import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaUserPlus, FaComments, FaChartBar, FaSignOutAlt, FaClipboardList, FaHome } from 'react-icons/fa'; // Importing Leave Application icon
import { Link, Outlet } from 'react-router-dom'; // For navigation

const ManagerSide = () => {
    return (
      <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
            width: '250px',
            backgroundColor: '#f8f9fa',
            padding: '20px',
        }}
        >
        <h4>PROJECT MANAGER</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>

        <li className="mb-4 mt-5">
            <Link to="/manager" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
              <FaHome className="me-2" /> HOME
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/manager/developers" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
              <FaClipboardList className="me-2" /> DEVELOPERS
            </Link>
          </li>
          <li>
            <Link to="/manager/managerdashboard" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
              <FaSignOutAlt className="me-2" /> DASHBOARD
            </Link>
          </li>

          <li className="mb-4 mt-4">
            <Link to="/applyleave" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
              <FaClipboardList className="me-2" /> APPLY LEAVE
            </Link>
          </li>
          <li>
            <Link to="/login" className='mt-3' style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
              <FaSignOutAlt className="me-2" /> Logout
            </Link>
          </li>

        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1 }}>
        {/* Navbar */}
        <Navbar bg="light" expand="lg" style={{ width: '100%' }}>
          <Container fluid>
            <Navbar.Brand href="#">MATRIX</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Search Bar */}
              <Form className="d-flex ms-auto">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
      </div>
    </div>
      
                  </>
  );
};

export default ManagerSide;
