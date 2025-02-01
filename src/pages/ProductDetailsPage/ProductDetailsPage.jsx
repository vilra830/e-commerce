import { useParams } from "react-router";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContextProvider";

const ProductDetailsPage = () => {
  const { getProductById } = useContext(ProductsContext);
  const { id } = useParams();
  const selectedProduct = getProductById(id);

  return (
    <>
      <h1>{selectedProduct.name}</h1>
    </>
  );
};

export default ProductDetailsPage;
