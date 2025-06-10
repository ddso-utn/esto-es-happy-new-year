import Platos from './features/platos/Platos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, useNavigate} from 'react-router';
import {Routes, Route} from 'react-router-dom';
import Layout from './features/layout/Layout';
import ProductDetailPage from './features/products/ProductDetail';
import Bebidas from "./features/bebidas/bebidas";
import {Comanda} from "./features/pedido/comanda";
import {createContext, useEffect, useState} from "react";
import {getBebidas, getPlatos, putCommanda} from "./mockData/api";
import axios from "axios";
import {PlatosProvider} from "./context/platosProvider";
import {AppRoutes} from "./routes";
import {BebidasProvider} from "./context/bebidasProvider";
import {ComandaProvider} from "./context/comandaProvider";

function App() {
  return (
    <PlatosProvider>
      <BebidasProvider>
        <ComandaProvider>
          <AppRoutes/>
        </ComandaProvider>
      </BebidasProvider>
    </PlatosProvider>
  );
}

export default App;
