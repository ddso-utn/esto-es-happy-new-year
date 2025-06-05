import Carousel from "../../components/carousel/Carousel";
import './Home.css'
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getProducts, getProductsSlowly, searchProducts} from "../../api/api";
import {Spinner} from "react-bootstrap";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const filtrarProductos = async (searchText) => {
    setLoading(true);
    setProducts(await searchProducts(searchText))
    setLoading(false);
  }

  const cargarProductos = async () => {
    setLoading(true);
    setProducts(await getProductsSlowly())
    setLoading(false);
  }

  useEffect(() => {
    cargarProductos()
  }, [])

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
      {loading ? <div className="spinner">
          <Spinner/>
        </div> :
        <Carousel products={products}/>
      }
    </div>
  )
};

export default Home;