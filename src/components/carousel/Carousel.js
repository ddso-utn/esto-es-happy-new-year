import './Carousel.css';
import ProductItem from '../products/ProductItem';
import { useCartDrawerContext } from '../../store/CartContext';

const Carousel = () => {

    const { wishedProducts} = useCartDrawerContext(); 

    return (
          <div className="carousel">
              {wishedProducts.map((product) =>
                <ProductItem
                  aProduct={product}
                  key={product.id}
                  />
              )}
          </div>
    )
};

export default Carousel;