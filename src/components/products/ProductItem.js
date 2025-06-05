import "./ProductItem.css"; 
import { Link } from "react-router-dom";
import {Card} from "@mui/material";

const ProductItem = ({ aProduct, key }) => {

    return (
        <Card className="product-item" key={key}>
          <img src={aProduct.image} alt={aProduct.title} />
          <div className="item-footer">
            <h3>{aProduct.title}</h3>
            <p>${aProduct.price.toFixed(2)}</p>
          </div>
        </Card>
    );

};

export default ProductItem;