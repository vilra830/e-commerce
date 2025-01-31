import classes from "./ProductList.module.scss";

import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className={classes.list}>
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ProductList;
