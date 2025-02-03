import { useParams } from "react-router";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";
import classes from "./ProductDetailsPage.module.scss";

const ProductDetailsPage = () => {
  const { getProductById , addProductToCart , productQuantity } = useContext(ProductsContext);
  const { id } = useParams();
  const selectedProduct = getProductById(id);
  

  return (
    <div className={classes.productDetails}>
      <h1 className={classes.productName}>{selectedProduct.name} </h1>
      <img src={selectedProduct.imageUrl} tag={selectedProduct.name} className={classes.productImage} />
      <h2 className={classes.productPrice}>${selectedProduct.price}</h2>
      {selectedProduct.quantity > 0 ? (<button className={classes.addToCartBtn} onClick={() => addProductToCart(selectedProduct)}> ORDER </button> ): <h3 className={classes.soldOut}>Sold Out</h3>}
      {productQuantity > 0 && <span>QUANTITY : {productQuantity} </span>}

    </div>
  );
};

export default ProductDetailsPage;
