import ProductList from "../../components/ProductList/ProductList";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import classes from "./ProductsPage.module.scss"
import Loading from "../../components/Loading/Loading.jsx";

//Loader component
const ProductsPage = () => {
  const { fetchStatus, error, products } = useContext(ProductsContext);

  return (
    <div>
      <h1 className={classes.h1}>Products</h1>
      {fetchStatus === "LOADING" && <Loading />}
      {fetchStatus === "SUCCESS" && (
        // <div className={classes.wrapper}>
            <ProductList products={products} />
        // </div>
      )}
      {fetchStatus === "FAILURE" && <p>{error.message}</p>}
    </div>
  );
};

export default ProductsPage;
