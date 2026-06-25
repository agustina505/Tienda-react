import { Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoItem from "../components/CarritoItem";

const ProductoCard = ({ producto, agregarAlCarrito, esFavorito, toggleFavorito }) => {
  const sinStock = producto.stock === 0;
  const favorito = esFavorito(producto.id);

  return (
    <Card className="h-100 shadow-sm">
      <Button
        variant={favorito ? "danger" : "outline-secondary"}
        size="sm"
        className="position-absolute top-0 start-0 m-2 rounded-circle"
        style={{ width: "40px", height: "40px", zIndex: 10 }}
        onClick={() => toggleFavorito(producto.id)}
      >
        {favorito ? "❤️" : "🤍"}
      </Button>

      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {producto.categoria}
        </Card.Subtitle>
        <Card.Text className="flex-grow-1 small">
          {producto.descripcion.substring(0, 80)}...
        </Card.Text>
        <Card.Text className="fw-bold fs-5 text-primary">
          ${producto.precio.toLocaleString()}
        </Card.Text>
        <Card.Text className="small">
          Stock: {producto.stock} unidades
        </Card.Text>

        <div className="d-flex gap-2 mt-auto">
          <Link to={`/producto/${producto.id}`} className="w-50">
            <Button variant="outline-dark" size="sm" className="w-100">
              Ver detalle
            </Button>
          </Link>
          <Button
            variant="primary"
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
  );
};

export default ProductoCard;