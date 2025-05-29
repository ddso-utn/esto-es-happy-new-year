import Product from './Product'
import React, { useState  } from 'react';

export default function ProductsList(props) {
  const [maxOrder, setMaxOrder] = useState(-1);

  let contents;
  if (props.products.length === 0) {
    contents = "No hay productos :(";
  } else {
    contents = props.products.map(it => (
      <Product key={it.id} value={it} maxOrder={maxOrder} onFav={() => setMaxOrder(maxOrder - 1)} />
    ));
  }

  return (
    <div className="hny-products">
      {contents}
    </div>
  )
}