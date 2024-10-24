import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/rick-and-morty">Rick and Morty</Nav.Link>
          <Nav.Link as={Link} to="/pokemon">Pokemon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
