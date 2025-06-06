import './Carousel.css';
import ProductItem from '../products/ProductItem';

const Carousel = ({products, setCantidadProducto}) => {

    return (
          <div className="carousel">
              {products.map((product) =>
                <ProductItem
                  aProduct={product}
                  key={product.id}
                  setCantidad={(cantidad) => setCantidadProducto(product, cantidad)}/>
              )}
          </div>
    )
};

export default Carousel;