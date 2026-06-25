import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import productos from "../data/productos";

const Favoritos = ({ favoritos, esFavorito, toggleFavorito, agregarAlCarrito }) => {
  // Filtrar los productos que son favoritos
  const productosFavoritos = productos.filter(producto => 
    favoritos.includes(producto.id)
  );

  // Si no hay favoritos
  if (productosFavoritos.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2>⭐ No tenés productos favoritos</h2>
        <p className="mb-4">Explorá el catálogo y marcá tus productos favoritos con el corazón ❤️</p>
        <Link to="/productos">
          <Button variant="dark">Ver catálogo</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">⭐ Mis Favoritos</h1>
      <p className="text-muted mb-4">
        Tenés {productosFavoritos.length} producto{productosFavoritos.length !== 1 ? 's' : ''} en favoritos
      </p>

      <Row>
        {productosFavoritos.map((producto) => {
          const sinStock = producto.stock === 0;
          const favorito = esFavorito(producto.id);

          return (
            <Col key={producto.id} md={6} lg={4} xl={3} className="mb-4">
              <Card className="h-100 shadow-sm position-relative">
                {/* ⭐ Botón de favoritos */}
                <Button
                  variant={favorito ? "danger" : "outline-secondary"}
                  size="sm"
                  className="position-absolute top-0 start-0 m-2 rounded-circle"
                  style={{ width: "40px", height: "40px", zIndex: 10 }}
                  onClick={() => toggleFavorito(producto.id)}
                >
                  {favorito ? "❤️" : "🤍"}
                </Button>

                {/* Indicador de SIN STOCK */}
                {sinStock && (
                  <span 
                    className="position-absolute top-0 end-0 m-2 badge bg-danger"
                    style={{ zIndex: 10 }}
                  >
                    ⛔ Sin stock
                  </span>
                )}

                <Card.Img
                  variant="top"
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=Sin+imagen";
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {producto.categoria}
                  </Card.Subtitle>
                  <Card.Text className="fw-bold fs-5 text-primary">
                    ${producto.precio.toLocaleString()}
                  </Card.Text>
                  <Card.Text className={`small ${sinStock ? 'text-danger fw-bold' : ''}`}>
                    {sinStock ? '❌ No disponible' : `Stock: ${producto.stock} unidades`}
                  </Card.Text>

                  <div className="d-flex gap-2 mt-auto">
                    <Link to={`/producto/${producto.id}`} className="w-50">
                      <Button variant="outline-dark" size="sm" className="w-100">
                        Ver detalle
                      </Button>
                    </Link>
                    <Button
                      variant="dark"
                      size="sm"
                      className="w-50"
                      disabled={sinStock}
                      onClick={() => agregarAlCarrito(producto, 1)}
                    >
                      {sinStock ? "Sin stock" : "Agregar"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favoritos;