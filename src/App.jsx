import { useState } from 'react'

import { Button, Stack, Nav, Container, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar bg="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="/src/assets/soccer.png"
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar.Brand href="#home"><p class="text-white pt-3">Pick a Player</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
          
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end pl-7">
                <Navbar.Text class="text-white">
                  <Nav className="me-auto text-red align-items-end pl-7">
              <Nav.Link href="#home"><p class="text-white pt-3">INICIO</p></Nav.Link>
              <Nav.Link href="#clubes"><p class="text-white pt-3">CLUBES</p></Nav.Link>
              <Nav.Link href="#jugadores"><p class="text-white pt-3">JUGADORES</p></Nav.Link>
              <Nav.Link href="#predicciones"><p class="text-white pt-3">PREDICCIONES</p> </Nav.Link>
            </Nav>
                </Navbar.Text>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default App;
