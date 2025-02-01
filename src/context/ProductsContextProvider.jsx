import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../services/product-services";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFetchStatus("LOADING");
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setFetchStatus("SUCCESS");
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, []);

  //add a function that returns a product using the id from Products Page SElection of Products
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <>
      <ProductsContext.Provider
        value={{ products, error, fetchStatus, getProductById }}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;
