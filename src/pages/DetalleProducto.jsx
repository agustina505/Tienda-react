import { useParams, Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import productos from '../data/productos';

const DetalleProducto = ({ agregarAlCarrito, esFavorito, toggleFavorito }) => {
  // Obtener el ID de la URL
  const { id } = useParams();
  
  // Buscar el producto por ID
  const producto = productos.find(p => p.id === parseInt(id));

  // Si no existe el producto, mostrar mensaje
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
  
  // ⭐ CORREGIDO: Definir si es favorito (con condicional por si no viene la prop)
  const favorito = esFavorito ? esFavorito(producto.id) : false;

  return (
    <Container className="py-4">
      {/* Botón para volver */}
      <Link to="/productos">
        <Button variant="outline-secondary" className="mb-4">
          ← Volver al catálogo
        </Button>
      </Link>

      <Row>
        {/* Columna de la imagen ampliada */}
        <Col md={6} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Img 
              variant="top"
              src={producto.imagen} 
              alt={producto.nombre}
              style={{ height: "400px", objectFit: "contain" }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x400?text=Imagen+no+disponible";
              }}
            />
          </Card>
        </Col>

        {/* Columna de la información del producto */}
        <Col md={6}>
          <div className="d-flex justify-content-between align-items-start">
            <h1 className="mb-3">{producto.nombre}</h1>
            
            {/* ⭐ CORREGIDO: Solo mostrar el botón si toggleFavorito existe */}
            {toggleFavorito && (
              <Button
                variant={favorito ? "danger" : "outline-secondary"}
                size="lg"
                className="rounded-circle"
                style={{ width: "60px", height: "60px", flexShrink: 0 }}
                onClick={() => toggleFavorito(producto.id)}
              >
                {favorito ? "❤️" : "🤍"}
              </Button>
            )}
          </div>
          
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

          {/* Características principales */}
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
          
          {/* Botón de agregar al carrito */}
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