import Home from './features/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import Product from './features/products/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<Product />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
