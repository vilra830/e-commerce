import ProductCard from "../ProductCard/ProductCard";
const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </>
  );
};

export default ProductList;
