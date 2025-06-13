import Carousel from "../../components/carousel/Carousel";
import './Home.css'
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import { getProductsSlowly} from "../../api/api";
import {Spinner} from "react-bootstrap";
import ShoppingCartDrawer from "../../components/cartDrawer/ShoppingCartDrawer";
import { useCartDrawerContext } from "../../store/CartContext";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const {allProducts, addProducts} = useCartDrawerContext();
  useEffect(() => {
    cargarProductos()
  }, [])


  const filtrarProductos = (searchText) => {
    addProducts(allProducts.filter(product => product.title.startsWith(searchText)))
  }

  const cargarProductos = async () => {
    const products = await getProductsSlowly();
    addProducts(products); 
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
      {!allProducts.length ? <div className="spinner">
          <Spinner/>
        </div> :
        <Carousel/>
        
      }
     <ShoppingCartDrawer></ShoppingCartDrawer>
    </div>
  )
};

export default Home;