import Carousel from "../../components/carousel/Carousel";
import './Home.css'
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import ShoppingCartDrawer from "../../components/cartDrawer/ShoppingCartDrawer";
import { useCartDrawerContext } from "../../store/CartContext";
import {getProducts} from "../../api/api"; 

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const {wishedProducts, addProducts, filterProducts} = useCartDrawerContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);  
  const [pageSize, setPageSize] = useState(0); 
  const [currentPageProducts, setCurrentPageProducts] = useState([]);

  const handlePageNumberChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
      cargarProductos()
  }, [pageNumber])

  const cargarProductos = async () => {
    try{
      const data = await getProducts(pageNumber);
      
      const productsWithCantidad = data.products.map(p => ({ ...p, cantidad: 0 }));

      setCurrentPageProducts(productsWithCantidad);
      setTotalPages(data.totalPages); 
      setPageSize(data.pageSize); 
      console.log(data)
    } catch (error) {
      console.error("Error loading products:", error);
    }
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
        <Button variant="outlined" onClick={() => filterProducts(searchText)}>Buscar</Button>
      </div>
      {!currentPageProducts.length ? <div className="spinner">
          <Spinner/>
        </div> :
        <Carousel currentPageProducts = {currentPageProducts} pageNumber = {pageNumber} handlePageNumberChange={handlePageNumberChange} totalPages={totalPages} pageSize={pageSize}/>
      }
     <ShoppingCartDrawer></ShoppingCartDrawer>
    </div>
  )
};

export default Home;