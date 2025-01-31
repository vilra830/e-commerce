const ProductCard = ({ productData }) => {
  return (
    <article>
      <img src={productData.imageUrl} tag={productData.name} />
      <h3>{productData.name}</h3>
      <h4>{productData.price}</h4>
    </article>
  );
};

export default ProductCard;
