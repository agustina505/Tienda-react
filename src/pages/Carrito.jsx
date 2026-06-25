import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarritoItem from "../components/CarritoItem";

const Carrito = ({ carrito, setCarrito }) => {
  
  // Función para aumentar cantidad
  const aumentarCantidad = (id) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  // Función para disminuir cantidad (mínimo 1)
  const disminuirCantidad = (id) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  // Función para eliminar producto del carrito
  const eliminarProducto = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  // Calcular el total general
  const totalGeneral = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  // Calcular cantidad total de productos
  const cantidadTotal = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  // Función para confirmar compra (simulada)
  const confirmarCompra = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío. Agregá productos antes de comprar.");
      return;
    }
    
    const mensaje = `COMPRA\n\nProductos:\n${carrito.map(item => 
      `- ${item.nombre}: ${item.cantidad} x $${item.precio.toLocaleString()} = $${(item.precio * item.cantidad).toLocaleString()}`
    ).join('\n')}\n\nTotal: $${totalGeneral.toLocaleString()}\n\nGracias por tu compra!`;
    
    alert(mensaje);
  };

  // Si el carrito está vacío, mostrar mensaje
  if (carrito.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="mb-4">Agrega productos para comenzar tu compra!</p>
        <Link to="/productos">
          <Button variant="primary">Ver productos</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Carrito de Compras</h1>
      
      {/* Cantidad total de productos */}
      <p className="lead mb-4">
        Tenés <strong>{cantidadTotal}</strong> producto{cantidadTotal !== 1 ? 's' : ''} en tu carrito
      </p>

      {/* Tabla de productos */}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <CarritoItem
              key={item.id}
              item={item}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              eliminarProducto={eliminarProducto}
    />
  ))}
</tbody>
      </Table>

      {/* Total y botones */}
      <Row className="justify-content-end">
        <Col md={4}>
          <div className="border rounded p-3 bg-light">
            <h4 className="mb-3">Resumen de compra</h4>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Cantidad de productos:</span>
              <strong>{cantidadTotal}</strong>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Total general:</span>
              <h4 className="text-primary mb-0">${totalGeneral.toLocaleString()}</h4>
            </div>
            <hr />
            <Button 
              variant="success" 
              className="w-100 mb-2"
              onClick={confirmarCompra}
            >
              Confirmar compra
            </Button>
            <Link to="/productos">
              <Button variant="outline-secondary" className="w-100">
                Seguir comprando
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;