import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBarEx from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';

function App() {
  // Inicializar el carrito leyendo de localStorage (si existe)
  const [carrito, setCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem('carrito');
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch (error) {
      console.error('Error al leer el carrito de localStorage:', error);
      return [];
    }
  });

  // Estado del tema (light/dark), leyendo lo guardado en localStorage
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem('tema') || 'light';
    } catch (error) {
      return 'light';
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Cada vez que cambia el tema, lo aplicamos al HTML y lo guardamos
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  // Cada vez que el carrito cambia, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

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
    alert(`Agregaste ${producto.nombre} al carrito`);
  };

  return (
    <BrowserRouter>
      <NavBarEx tema={tema} toggleTema={toggleTema} />
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
          <Route 
            path="/contacto" 
            element={<Contacto carrito={carrito} />} 
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;