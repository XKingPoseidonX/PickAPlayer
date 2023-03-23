import { useState } from 'react'

import { Button, Stack, Nav, Container, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Pick a Player</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO </Nav.Link>
            <Nav.Link href="#clubes">LUBES </Nav.Link>
            <Nav.Link href="#jugadores">UGADORES </Nav.Link>
            <Nav.Link href="#predicciones">REDICCIONES </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default App
