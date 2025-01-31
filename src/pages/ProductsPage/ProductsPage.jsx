import ProductList from "../../components/ProductList/ProductList";
import { getAllProducts } from "../../services/product-services";
import { useState, useEffect } from "react";

//Loader component
const ProductsPage = () => {
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

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
      <h1>Products</h1>
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "SUCCESS" && <ProductList products={products} />}
      {fetchStatus === "FAILURE" && <p>{error.message}</p>}
    </>
  );
};

export default ProductsPage;
