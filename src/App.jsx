import { useState } from "react";

import { Button, Stack, Nav, Container, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BestClubes from "./BestClubes";
import Jugadores from "./Jugadores";
import Jugador from "./Jugador";
import Predicciones from "./Predicciones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
            <Navbar.Brand href="#home">
              <p className="text-white pt-3"><font face="Bruno Ace SC">PICK A PLAYER</font></p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav "></Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end pl-7">
              <Navbar.Text className="text-white">
                <Nav className="me-auto text-red align-items-end pl-7">
                  <Nav.Link /* href="#home" */ as={Link} to="/BestClubes">
                    <p className="text-white pt-3"><font face="Bruno Ace SC">Inicio</font></p>
                  </Nav.Link>
                  <Nav.Link /* href="#clubes" */ as={Link} to="/BestClubes">
                    <p className="text-white pt-3"><font face="Bruno Ace SC">Clubes</font></p>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Jugadores">
                    <p className="text-white pt-3"><font face="Bruno Ace SC">Jugadores</font></p>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Predicciones">
                    <p className="text-white pt-3"><font face="Bruno Ace SC">Predicciones</font></p>{" "}
                  </Nav.Link>
                </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route index element={<BestClubes />} />
          <Route path="/Jugadores" element={<Jugadores />} />
          <Route path="/Jugadores/Jugador" element={<Jugador />} />
          <Route path="/BestClubes" element={<BestClubes />} />
          <Route path="/BestPlayer" element={<BestClubes />} />
          <Route path="/Predicciones" element={<Predicciones />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
