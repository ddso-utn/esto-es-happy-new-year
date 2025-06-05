import {products} from "../mockData/products";

export const getProducts = () => Promise.resolve(products)

export const getProductsSlowly = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(products)
  }, 5000)
})