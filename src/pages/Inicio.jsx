import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <Container>
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner1.jpeg"
            alt="Banner 1"
            style={{ height: "400px", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1200x400?text=Banner+1";
            }}
          />
          <Carousel.Caption>
            <h3>Bienvenidos a Nevermore</h3>
            <p>La mejor moda en un solo lugar</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner2.webp"
            alt="Banner 2"
            style={{ height: "400px", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1200x400?text=Banner+2";
            }}
          />
          <Carousel.Caption>
            <h3>Ofertas increíbles</h3>
            <p>Hasta 40% off en productos seleccionados</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/banner3.jpg"
            alt="Banner 3"
            style={{ height: "400px", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1200x400?text=Banner+3";
            }}
          />
          <Carousel.Caption>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu pedido en la puerta de tu casa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Logo y nombre de la tienda */}
      <Row className="text-center mb-4 align-items-center">
        <Col>
          <img
            src="/img/cuervo_logo_trans.png"
            alt="Logo Nevermore"
            style={{ height: "80px", marginBottom: "10px" }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/80x80?text=Nevermore";
            }}
          />
          <h1 className="mt-2">Nevermore</h1>
          <p className="lead">Los mejores productos al mejor precio</p>
        </Col>
      </Row>

      {/* Descripción del emprendimiento */}
      <Row className="mb-5">
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <p>
            Bienvenido a Nevermore. Ofrecemos ropa de alta calidad
            con envíos a todo el país. Nacimos en 2024 con la misión de
            brindar estilo y comodidad a precios accesibles.
          </p>
        </Col>
      </Row>

      {/* Botón para ir al catálogo */}
      <Row className="text-center mb-5">
        <Col>
          <Link to="/productos">
            <Button variant="dark" size="lg">
              Ver catálogo completo →
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;