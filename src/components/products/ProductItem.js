import "./ProductItem.css"; 
import { Link } from "react-router-dom";   

const ProductItem = ({ aProduct, key }) => { 

    return (
        <div className="product-item" key={key}>
            <img src={aProduct.image} alt={aProduct.title} />
            <Link to={`/products/${aProduct.title.toLowerCase()}`}><h3>{aProduct.title}</h3></Link>
            <p>${aProduct.price}</p>
        </div>
    );

};

export default ProductItem;