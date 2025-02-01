import ProductList from "../../components/ProductList/ProductList";
import { getAllProducts } from "../../services/product-services";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";

//Loader component
const ProductsPage = () => {
  const { fetchStatus, error, products } = useContext(ProductsContext);

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
