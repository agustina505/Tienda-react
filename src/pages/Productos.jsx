import { useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import ProductoCard from "../components/ProductoCard";
import productos from "../data/productos";

const Productos = ({ agregarAlCarrito, esFavorito, toggleFavorito }) => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = [...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos.filter(producto => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "" || producto.categoria === categoria;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <Container className="py-4">
      <h1 className="mb-4">Nuestros Productos</h1>

      {/* Filtros */}
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Lista de productos */}
      <Row>
        {productosFiltrados.length === 0 ? (
          <Col>
            <p className="text-center">No se encontraron productos.</p>
          </Col>
        ) : (
          productosFiltrados.map(producto => (
            <Col key={producto.id} md={6} lg={4} xl={3} className="mb-4">
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
                esFavorito={esFavorito} 
                toggleFavorito={toggleFavorito}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Productos;