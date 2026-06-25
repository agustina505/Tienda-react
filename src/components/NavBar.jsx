import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Container } from "react-bootstrap";

const NavBarEx = ({ tema, toggleTema }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand  as={Link} to="/" className="d-flex align-items-center">
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
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Button
              variant="outline-light"
              size="sm"
              className="ms-lg-3 mt-2 mt-lg-0"
              onClick={toggleTema}
            >
              {tema === 'light' ? '🌙 Modo oscuro' : '☀️ Modo claro'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarEx;