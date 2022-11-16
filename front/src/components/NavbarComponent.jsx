import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

import '../css/NavbarComponent.css';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="responsive-navbar-nav">
        <Navbar.Brand href="/" id="logo">
        <a
        className="navbar-brand img-fluid" 
        href="/" 
        >
        <img src="https://i.postimg.cc/1Xg9C6hQ/LOGO-REMOTELY-copia.png" alt="" width="250" height="55"/>
        </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="responsive-navbar-nav" id="text"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="container-fluid">
          <Nav className="me-auto p-2" id="text">
          <Nav.Link href="/" className="p-3">Home</Nav.Link>
          <Nav.Link href="/jobs" className="p-3">Jobs</Nav.Link>
          <Nav.Link href="/form" className="p-3">Upload Jobs</Nav.Link>
          <Nav.Link href="/about" className="p-3">About</Nav.Link>
          <Nav.Link href="/contact" className="p-3">Contact</Nav.Link>
          </Nav>
            <Nav>
            <Nav.Link href="/signup">
            <button type="button" id="btn" className="btn btn-outline-dark" >Sign-up</button>
            </Nav.Link>
                <Navbar.Collapse id="responsive-navbar-nav" className="p-0 dropdown me-0 m-0">
                    <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                    <NavDropdown.Item className="dropdown-item" href="/messages">Messages</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item" href="/users">Users</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item" href="/subscriptors">Subscriptions</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown-item" href="/jobs">Jobs</NavDropdown.Item>
                    </ul>
                </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
