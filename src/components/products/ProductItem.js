import { useCartDrawerContext } from "../../store/CartContext";
import "./ProductItem.css"; 
import {Button, ButtonGroup, Card} from "@mui/material";

const ProductItem = ({ aProduct }) => {

  const {addProductWithAmount} = useCartDrawerContext(); 

  const decrementar = () => {
    addProductWithAmount(aProduct, -1);
  }

  const incrementar = () => {
    addProductWithAmount(aProduct, 1);
  }

    return (
        <Card className="product-item">
          <img src={aProduct.image} alt={aProduct.title} />
          <div className="item-footer">
            <div className="item-footer-data">
              <h3>{aProduct.title}
              </h3>
              <p>${aProduct.price.toFixed(2)}</p>
            </div>
            <div className="item-footer-actions">
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button onClick={decrementar}>-</Button>
                <div className="item-footer-counter">{aProduct.cantidad}</div>
                <Button onClick={incrementar}>+</Button>
              </ButtonGroup>
            </div>
          </div>
        </Card>
    );

};

export default ProductItem;