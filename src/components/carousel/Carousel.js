import './Carousel.css';
import { products } from '../../mockData/products';
import ProductItem from '../products/ProductItem';

const Carousel = () => {
    return (
        <div className="products-carousel">
            {products.map((product) =>
                <ProductItem aProduct = {product} key={product.id} />
            )}
        </div>
    )

};

export default Carousel;