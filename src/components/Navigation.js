import React from 'react';
import '../style/Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      // Bootstrap Navbar
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-0.5 mt-0">
        <Container>
            <Navbar.Brand as={Link} to="/Berkeleycodingmomma/NextGenWebfolio-react/">Amanda Gray</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                          {/* <Nav.Link as={Link} to="NextGenWebfolio-react/home" className="fs-5">Home</Nav.Link> */}
                <Nav.Link as={Link} to="/Berkeleycodingmomma/NextGenWebfolio-react/about/" className="fs-5 nav-link-highlight shadow-lg">About Me</Nav.Link>
                {/* <Nav.Link as={Link} to="/Berkeleycodingmomma/NextGenWebfolio-react/portfolio" className="fs-5 nav-link-highlight shadow-lg ">Portfolio</Nav.Link> */}
                <Nav.Link as={Link} to="/Berkeleycodingmomma/NextGenWebfolio-react/contact" className="fs-5 nav-link-highlight shadow-lg ">Contact</Nav.Link>
                <Nav.Link as={Link} to="/Berkeleycodingmomma/NextGenWebfolio-react/resume" className="fs-5 nav-link-highlight shadow-lg ">Resume</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  // Export Navigation
  export default Navigation;
  