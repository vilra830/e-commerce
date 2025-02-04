import { useParams } from "react-router";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import classes from "./ProductDetailsPage.module.scss";
import { LoadBundleTask } from "firebase/firestore";
import Loading from "../../components/Loading/Loading";

const ProductDetailsPage = () => {
  const { fetchStatus, error, getProductById , addProductToCart , productQuantity } = useContext(ProductsContext);
  const { id } = useParams();
  const selectedProduct = getProductById(id);
  

  return (
    <div>
               <h1 className={classes.h1}> Our Favourites</h1>

    {fetchStatus === "LOADING" && <Loading />}
    {fetchStatus === "FAILURE" && <p>{error.message}</p>}

    {fetchStatus === "SUCCESS" && (
      <div className={classes.productDetails}>
      <h2 className={classes.productName}>{selectedProduct.name} </h2>
      <img src={selectedProduct.imageUrl} tag={selectedProduct.name} className={classes.productImage} />
      <h2 className={classes.productPrice}>${selectedProduct.price}</h2>
      {selectedProduct.quantity > 0 ? (<button className={classes.addToCartBtn} onClick={() => addProductToCart(selectedProduct)}> ORDER </button> ): <h3 className={classes.soldOut}>Sold Out</h3>}
      {productQuantity > 0 && <span>QUANTITY: {productQuantity} </span>}

    </div>
    )};
    </div> 

  );
};

export default ProductDetailsPage;
