import './Carousel.css';
import { products } from '../../mockData/products';
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="products-carousel">
      {products.map(product => (
        <div key={product.id} className="product-carousel-item">
          <img src={product.image} alt={product.title} />
          <Link to={`/${product.title.toLowerCase()}`}>
            <h2>{product.title}</h2>
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;