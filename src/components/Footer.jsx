import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2026 Nevermore - Todos los derechos reservados</p>
            <small>Calidad y estilo para vos</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;