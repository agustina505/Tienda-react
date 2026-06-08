import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <Container>
      <Row className="text-center mb-4">
        <Col>
          <h1 className="mt-3">Nevermore</h1>
          <p className="lead">Los mejores productos al mejor precio</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <p>
            Bienvenido a nuestra tienda. Ofrecemos productos de alta calidad
            con envíos a todo el país.
          </p>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col>
          <Link to="/productos">
            <Button variant="primary" size="lg">
              Ver catálogo completo →
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;