import { useParams } from "react-router-dom";
import { products } from "../../mockData/products";

const Product = () => {
  const { title } = useParams();
  const product = products.find(p => p.title.toLowerCase() === title.toLowerCase());

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default Product;