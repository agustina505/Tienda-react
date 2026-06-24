import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Navbar, Nav, Container } from "react-bootstrap";


const NavBarEx = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/img/cuervo_logo_closeup.png"
            alt="Logo Nevermore"
            style={{ 
              height: "35px", 
              width: "35px", 
              marginRight: "10px",
              objectFit: "contain"
            }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/35x35?text=N";
            }}
          />
          Nevermore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/carrito">Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarEx;