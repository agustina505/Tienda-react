import { Button } from "react-bootstrap";

const CarritoItem = ({ item, aumentarCantidad, disminuirCantidad, eliminarProducto }) => {
  return (
    <tr>
      <td className="align-middle">
        <strong>{item.nombre}</strong>
      </td>
      <td className="align-middle">${item.precio.toLocaleString()}</td>
      <td className="align-middle">
        <div className="d-flex align-items-center gap-2">
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => disminuirCantidad(item.id)}
            disabled={item.cantidad === 1}
          >
            -
          </Button>
          <span className="mx-2" style={{ minWidth: "30px", textAlign: "center" }}>
            {item.cantidad}
          </span>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => aumentarCantidad(item.id)}
            disabled={item.cantidad >= item.stock}
          >
            +
          </Button>
        </div>
      </td>
      <td className="align-middle">
        <strong>${(item.precio * item.cantidad).toLocaleString()}</strong>
      </td>
      <td className="align-middle">
        <Button
          variant="danger"
          size="sm"
          onClick={() => eliminarProducto(item.id)}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CarritoItem;