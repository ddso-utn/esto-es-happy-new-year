import React, { useState } from 'react';
import './Carousel.css';
import ProductItem from '../products/ProductItem';
import { useCartDrawerContext } from '../../store/CartContext';

const ITEMS_PER_PAGE = 4; // Number of products to show at once

const Carousel = () => {
  const { wishedProducts } = useCartDrawerContext();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(wishedProducts.length / ITEMS_PER_PAGE);

  const handlePrev = () => setPage(prev => Math.max(prev - 1, 0));
  const handleNext = () => setPage(prev => Math.min(prev + 1, totalPages - 1));

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const productsToShow = wishedProducts.slice(start, end);

  return (
    <div>
      <div className="carousel">
        <button className="carousel-arrow" onClick={handlePrev} disabled={page === 0}>
          &#8592;
        </button>
        {productsToShow.map(product => (
          <ProductItem aProduct={product} key={product.id} />
        ))}
        <button className="carousel-arrow" onClick={handleNext} disabled={page === totalPages - 1}>
          &#8594;
        </button>
      </div>
      <div className="carousel-pagination">
        <span>{page + 1} / {totalPages}</span>
      </div>
    </div>
  );
};

export default Carousel;