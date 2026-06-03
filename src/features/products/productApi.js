import axios from "axios";

export const fetchProductsAPI = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products"
  );

  return response.data;
};

export const fetchProductByIdAPI = async (id) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${id}`
  );

  return response.data;
};