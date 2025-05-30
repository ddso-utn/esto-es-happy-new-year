import './Carousel.css';

const Carousel = ({ products }) => {
  return (
    <div className="products-carousel">
      {products.map(product => (
        <div key={product.id} className="product-carousel-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;