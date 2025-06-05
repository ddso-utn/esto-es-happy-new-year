import "./ProductItem.css"; 
import { Link } from "react-router-dom";
import {Button, ButtonGroup, Card} from "@mui/material";
import {useState} from "react";

const ProductItem = ({ aProduct, key }) => {
  const [cantidad, setCantidad] = useState(0);

  const decrementar = () => {
    setCantidad(Math.max(0,cantidad - 1));
  }

  const incrementar = () => {
    setCantidad(cantidad + 1);
  }

    return (
        <Card className="product-item" key={key}>
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
                <div className="item-footer-counter">{cantidad}</div>
                <Button onClick={incrementar}>+</Button>
              </ButtonGroup>
            </div>
          </div>
        </Card>
    );

};

export default ProductItem;