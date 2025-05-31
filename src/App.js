import Home from './features/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import Product from './features/products/Product';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/layout/Layout';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout  />} >
        <Route index element={<Home />} />
        <Route path="/productos/:title" element={<Product />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
