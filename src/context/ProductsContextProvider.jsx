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

  return (
    <>
      <ProductsContext.Provider value={{ products, error, fetchStatus }}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;
