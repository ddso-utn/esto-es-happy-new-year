import {products} from "../mockData/products";

export const getProducts = () => Promise.resolve(products)

export const getProductsSlowly = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(products)
  }, 5000)
})

export const searchProducts = (searchTerm) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(products.filter(product => product.title.startsWith(searchTerm)))
  }, 1000)
})
