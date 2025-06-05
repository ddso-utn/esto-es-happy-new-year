import Carousel from "../../components/carousel/Carousel";
import './Home.css'
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import { products } from '../../mockData/products';

let productosFiltrados = products

const filtrarProductos = (searchText) => {
  productosFiltrados = products.filter(product => product.title.startsWith(searchText))
  console.log(productosFiltrados)
}

const Home = () => {
  const [searchText, setSearchText] = useState("");

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
        <Button variant="contained" onClick={() => filtrarProductos(searchText)}>Buscar</Button>
      </div>
      <Carousel products={productosFiltrados} />
    </div>
  )
};

export default Home;