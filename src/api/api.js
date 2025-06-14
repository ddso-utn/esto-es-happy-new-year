import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProducts = async (pageNumber) => {
  console.log(pageNumber); 
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { pageNumber: pageNumber }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};