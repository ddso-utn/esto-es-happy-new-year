import Platos from './features/platos/Platos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/layout/Layout';
import ProductDetailPage from './features/products/ProductDetail';
import Bebidas from "./features/bebidas/bebidas";
import {useEffect, useState} from "react";
import {getBebidas, getPlatos, putCommanda} from "./mockData/api";

function App() {
  const [platos, setPlatos] = useState([])
  const [bebidas, setBebidas] = useState([])

  useEffect(() => {
    const cargarPlatos = async () => setPlatos(await getPlatos())
    cargarPlatos()
  }, [])

  useEffect(() => {
    const cargarBebidas = async () => setBebidas(await getBebidas())
    cargarBebidas()
  }, [])

  const platosSeleccionados = () =>
    platos.filter(p => p.seleccionado)

  const agregarPlatosAComanda = async () => {
    console.log("Agregando platos...", platosSeleccionados().map(p => `${p.nombre} (Notas: ${p.notas})`))
    await putCommanda(platosSeleccionados())
    setPlatos(platos.map(p => ({...p, seleccionado: false})))
    alert("Platos agregados!")
  }

  const cambiarSeleccion = (plato) => {
    // Devuelve un plato nuevo modificado ... como en Haskell!
    return {...plato, seleccionado: !plato.seleccionado}
  }

  const cambiarSeleccionPlato = (idPlato) => setPlatos(
    // Devuelve tmb una lista nueva modificada.
    // Si es el plato buscado lo devuelve modificado; si no, no.
    platos.map(p => p.id === idPlato ? cambiarSeleccion(p) : p)
  )

  const cambiarNotas = (plato, notas) => {
    // Devuelve un plato nuevo modificado ... como en Haskell!
    return {...plato, notas}
  }

  const cambiarNotasPlato = (idPlato, notas) => setPlatos(
    platos.map(p => p.id === idPlato ? cambiarNotas(p, notas) : p)
  )

  const bebidasSeleccionados = () =>
    bebidas.filter(p => p.seleccionado)


  const cambiarSeleccionUnaBebida = (bebida) => {
    // Devuelve un bebida nuevo modificado ... como en Haskell!
    return {...bebida, seleccionado: !bebida.seleccionado}
  }

  const cambiarSeleccionBebida = (idBebida) => setBebidas(
    // Devuelve tmb una lista nueva modificada.
    // Si es el bebida buscado lo devuelve modificado; si no, no.
    bebidas.map(p => p.id === idBebida ? cambiarSeleccionUnaBebida(p) : p)
  )

  const agregarABebidasAComanda = async () => {
    console.log("Agregando bebidas...", bebidasSeleccionados().map(p => p.nombre))
    await putCommanda(bebidasSeleccionados())
    setBebidas(bebidas.map(p => ({...p, seleccionado: false})))
    alert("Bebidas agregados!")
  }

  const vaciar = () => {
    setBebidas(bebidas.map(p => ({...p, seleccionado: false})))
    setPlatos(platos.map(p => ({...p, seleccionado: false})))
  }


  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout numeroPlatos={platos.length + bebidas.length} vaciar={vaciar} />} >
        <Route path="/platos" element={<Platos
          platos={platos}
          cambiarSeleccionPlato={cambiarSeleccionPlato}
          cambiarNotasPlato={cambiarNotasPlato}
          agregarAComanda={agregarPlatosAComanda}
        />} />
        <Route path="/bebidas" element={<Bebidas
          bebidas={bebidas}
          cambiarSeleccionBebida={cambiarSeleccionBebida}
          agregarAComanda={agregarABebidasAComanda}
        />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
