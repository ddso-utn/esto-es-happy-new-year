import './Carousel.css';
import ProductItem from '../products/ProductItem';

const Carousel = ({products}) => {
    return (
          <div className="carousel">
              {products.map((product) =>
                <ProductItem aProduct={product} key={product.id}/>
              )}
          </div>
    )

};

export default Carousel;