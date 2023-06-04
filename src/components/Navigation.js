import React from 'react';
import '../style/Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    // Bootstrap Navbar
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      sticky="top" 
      className="py-0.5 mt-0">
      <Container>
        {/* Navbar Brand */}
        {/* <Navbar.Brand as={Link} to="/Berkeleycodingmomma/NextGenWebfolio-react/">Amanda Gray</Navbar.Brand> */}
        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto">
            {/* About Me Link */}
            <Nav.Link 
              as={Link} 
              to="/NextGenWebfolio-react/about" 
              className="fs-5 nav-link-highlight shadow-lg">
              About Me
            </Nav.Link>
            {/* Portfolio Link */}
            <Nav.Link 
              as={Link} 
              to="/NextGenWebfolio-react/portfolio" 
              className="fs-5 nav-link-highlight shadow-lg">
              Portfolio
            </Nav.Link>
            {/* Resume Link */}
            <Nav.Link 
              as={Link} 
              to="/NextGenWebfolio-react/resume" 
              className="fs-5 nav-link-highlight shadow-lg ">
              Resume
            </Nav.Link>
            {/* Contact Link */}
            <Nav.Link 
              as={Link} 
              to="/NextGenWebfolio-react/contact" 
              className="fs-5 nav-link-highlight shadow-lg ">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export Navigation
export default Navigation;
