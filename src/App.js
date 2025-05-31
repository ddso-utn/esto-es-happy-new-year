import HomePage from './features/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/layout/Layout';
import ProductDetailPage from './features/products/ProductDetail';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout  />} >
        <Route index element={<HomePage />} />
        <Route path="/products/:title" element={<ProductDetailPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
