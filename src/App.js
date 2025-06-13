import HomePage from './features/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/layout/Layout';
import ProductDetailPage from './features/products/ProductDetail';
import {createTheme, ThemeProvider} from "@mui/material";
import Checkout from "./features/checkout/Checkout";
import { CartDrawerProvider } from './store/CartContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CartDrawerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout  />} >
            <Route index element={<HomePage />} />
            <Route path="/products/:title" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartDrawerProvider>
    </ThemeProvider>

  );
}

export default App;
