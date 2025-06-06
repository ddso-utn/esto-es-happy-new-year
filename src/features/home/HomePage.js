import Carousel from "../../components/carousel/Carousel";
import './Home.css'
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getProducts, getProductsSlowly} from "../../api/api";
import {Spinner} from "react-bootstrap";

const conCantidad = (cantidad) => (producto) => ({...producto, cantidad})

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    cargarProductos()
  }, [])

  const setCantidadProducto = (producto, cantidad) => {
    setProducts(products.map((p) =>
      p.id === producto.id ? conCantidad(cantidad)(p) : p
    ));
  }

  const filtrarProductos = (searchText) => {
    setProducts(products.filter(product => product.title.startsWith(searchText)))
  }

  const cargarProductos = async () => {
    const products = await getProductsSlowly();
    setProducts(products.map(conCantidad(0)))
  }

  const comprar = () => {
    const productosAComprar = products.filter(p => p.cantidad > 0)
    alert(`Ud. va a comprar: ${productosAComprar.map(p => p.title).join(', ')}`)
  }

  return (
    <div className="root">
      <div className="title">
        <h1 className="collection-name">Winter 2025</h1>
        <span>NEW COLLECTION</span>
      </div>
      <div className="search">
        <TextField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          variant="standard"
          placeholder="Buscar por nombre"
        />
        <Button variant="outlined" onClick={() => filtrarProductos(searchText)}>Buscar</Button>
      </div>
      {!products.length ? <div className="spinner">
          <Spinner/>
        </div> :
        <Carousel products={products} setCantidadProducto={setCantidadProducto}/>
      }
      <div className="actions">
        <Button variant="contained" onClick={comprar}>Comprar</Button>
      </div>
    </div>
  )
};

export default Home;