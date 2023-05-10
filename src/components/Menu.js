import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar className="nav" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">A propos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mon profil</Nav.Link>
            <Nav.Link href="#features">Abonné(e)s</Nav.Link>
            <Nav.Link href="#pricing">Poke</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menu