import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const FormularioCompra = ({ carrito }) => {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    email: "",
    telefono: "",
    direccion: "",
    metodoEntrega: "envio",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!formData.nombreApellido.trim()) {
      nuevosErrores.nombreApellido = "El nombre y apellido es obligatorio.";
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        nuevosErrores.email = "El email no tiene un formato válido.";
      }
    }

    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    }

    if (!formData.direccion.trim()) {
      nuevosErrores.direccion = "La dirección o localidad es obligatoria.";
    }

    if (carrito.length === 0) {
      nuevosErrores.carrito = "No podés confirmar la compra con el carrito vacío.";
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresEncontrados = validar();
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length === 0) {
      setEnviado(true);
      setFormData({
        nombreApellido: "",
        email: "",
        telefono: "",
        direccion: "",
        metodoEntrega: "envio",
        mensaje: "",
      });
    } else {
      setEnviado(false);
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Formulario de compra</h2>

      {enviado && (
        <Alert variant="success">
          ¡Gracias! Tus datos fueron enviados correctamente. Te contactaremos
          a la brevedad para coordinar la entrega.
        </Alert>
      )}

      {errores.carrito && <Alert variant="warning">{errores.carrito}</Alert>}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y apellido *</Form.Label>
          <Form.Control
            type="text"
            name="nombreApellido"
            value={formData.nombreApellido}
            onChange={handleChange}
            isInvalid={!!errores.nombreApellido}
          />
          <Form.Control.Feedback type="invalid">
            {errores.nombreApellido}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errores.email}
          />
          <Form.Control.Feedback type="invalid">
            {errores.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono *</Form.Label>
          <Form.Control
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            isInvalid={!!errores.telefono}
          />
          <Form.Control.Feedback type="invalid">
            {errores.telefono}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dirección o localidad *</Form.Label>
          <Form.Control
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            isInvalid={!!errores.direccion}
          />
          <Form.Control.Feedback type="invalid">
            {errores.direccion}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Método de entrega *</Form.Label>
          <Form.Select
            name="metodoEntrega"
            value={formData.metodoEntrega}
            onChange={handleChange}
          >
            <option value="envio">Envío a domicilio</option>
            <option value="retiro">Retiro en local</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje o aclaración (opcional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100">
          Confirmar compra
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioCompra;