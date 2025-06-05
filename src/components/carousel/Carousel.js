import './Carousel.css';
import { products } from '../../mockData/products';
import ProductItem from '../products/ProductItem';

const Carousel = () => {
    return (
      <div className="root">
          <div className="carousel">
              {products.map((product) =>
                <ProductItem aProduct={product} key={product.id}/>
              )}
          </div>
      </div>
    )

};

export default Carousel;