import './Carousel.css';
import ProductItem from '../products/ProductItem';


const Carousel = ({ currentPageProducts, pageNumber, totalPages, handlePageNumberChange}) => {


const handlePrev = () => handlePageNumberChange(Math.max(pageNumber - 1, 1));
const handleNext = () => handlePageNumberChange(Math.min(pageNumber + 1, totalPages));

  return (
    <div>
      <div className="carousel">
        <button className="carousel-arrow" onClick={handlePrev} disabled={pageNumber === 1}>
          &#8592;
        </button>
        {currentPageProducts.map(product => (
          <ProductItem aProduct={product} key={product.id} />
        ))}
        <button className="carousel-arrow" onClick={handleNext} disabled={pageNumber === totalPages}>
          &#8594;
        </button>
      </div> 
    </div>
  );
};

export default Carousel;