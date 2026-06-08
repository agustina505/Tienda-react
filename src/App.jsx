import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarEx from './components/NavBar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';

function App() {
  return (
    <BrowserRouter>
      <NavBarEx />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;