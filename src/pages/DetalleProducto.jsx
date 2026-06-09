import { useParams, Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import productos from '../data/productos';

const DetalleProducto = ({ agregarAlCarrito }) => {
  //Obtener el id de la url
  const { id } = useParams();
  
  //Buscar el producto por id
  const producto = productos.find(p => p.id === parseInt(id));

  //Si no existe el producto, mostrar mensaje
  if (!producto) {
    return (
      <Container className="text-center py-5">
        <h2>Producto no encontrado</h2>
        <Link to="/productos">
          <Button variant="primary">Volver al catálogo</Button>
        </Link>
      </Container>
    );
  }

  const sinStock = producto.stock === 0;

  return (
    <Container className="py-4">
      <Link to="/productos">
        <Button variant="outline-secondary" className="mb-4">
          ← Volver al catálogo
        </Button>
      </Link>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Img 
              variant="top"
              src={producto.imagen} 
              alt={producto.nombre}
              style={{ height: "400px", objectFit: "contain" }}
              onError={(e) => {
                e.target.src = "/img/no-disponible.jpg";
              }}
            />
          </Card>
        </Col>

        <Col md={6}>
          <h1 className="mb-3">{producto.nombre}</h1>
          
          <p className="text-muted mb-2">
            <strong>Categoría:</strong> {producto.categoria}
          </p>
          
          <p className="lead mb-4">
            {producto.descripcion}
          </p>
          
          <h2 className="text-primary mb-3">
            ${producto.precio.toLocaleString()}
          </h2>
          
          <p className="mb-3">
            <strong>Stock disponible:</strong> {producto.stock} unidades
          </p>

          <Card className="bg-light mb-4">
            <Card.Body>
              <h6>Características principales:</h6>
              <ul className="mb-0">
                <li>Material de alta calidad</li>
                <li>Envío a todo el país</li>
                <li>Garantía de 30 días</li>
                {producto.categoria === "Indumentaria" && <li>Lavar en frío recomendado</li>}
                {producto.categoria === "Calzado" && <li>Números disponibles del 36 al 44</li>}
              </ul>
            </Card.Body>
          </Card>
          
          <Button 
            variant="primary" 
            size="lg"
            className="w-100"
            disabled={sinStock}
            onClick={() => agregarAlCarrito(producto, 1)}
          >
            {sinStock ? "Sin stock disponible" : "Agregar al carrito"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;