import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBarEx from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad }];
    });
    alert(`✅ Agregaste ${producto.nombre} al carrito`);
  };

  return (
    <BrowserRouter>
      <NavBarEx />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route 
            path="/productos" 
            element={<Productos agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/producto/:id" 
            element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/carrito" 
            element={<Carrito carrito={carrito} setCarrito={setCarrito} />} 
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;