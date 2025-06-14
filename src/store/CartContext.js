import { createContext, useState, useContext } from "react";

const CartDrawerContext = createContext();

export const useCartDrawerContext = () => useContext(CartDrawerContext);

export const CartDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [wishedProducts, setWishedProducts] = useState([]);

  const showCart = () => {
    setOpen(true);
  }
  const hideCart = () => setOpen(false);

  const addProductWithAmount = (product, amount) => {

    const quantity = Math.max(0, product.cantidad + amount);

    setWishedProducts(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, cantidad: quantity } : p);
      }
      return [...prev, { ...product, cantidad: quantity }];
    });
  }

const addProducts = (products) => {

  setWishedProducts(prev => {
    // Mantén los productos del carrito (cantidad > 0)
    const carrito = prev.filter(p => p.cantidad > 0);
    // Agrega los nuevos productos de la página actual, solo si no están ya en el carrito
    const nuevos = products
      .filter(apiProd => !carrito.some(c => c.id === apiProd.id))
      .map(p => ({ ...p, cantidad: 0 }));
    return [...carrito, ...nuevos];
  });
};

  const filterProducts = (searchText) => {
    const filtered = wishedProducts.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
    setWishedProducts(filtered);
  }

  return (
    <CartDrawerContext.Provider value={{ open, showCart, hideCart, wishedProducts, addProductWithAmount, addProducts, filterProducts}}>
      {children}
    </CartDrawerContext.Provider>
  );
};