import { useParams } from "react-router";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductDetailsPage = () => {
  const { getProductById , addProductToCart } = useContext(ProductsContext);
  const { id } = useParams();
  const selectedProduct = getProductById(id);

  return (
    <>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.imageUrl} tag={selectedProduct.name} />
      <h2>${selectedProduct.price}</h2>
      {selectedProduct.quantity > 0 ? <button onClick={() => addProductToCart(selectedProduct)} >Add To Cart/</button> : <h3>Sold Out</h3>}
 

    </>
  );
};

export default ProductDetailsPage;
