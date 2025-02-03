import { Link } from "react-router";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ productData }) => {
  return (
    <Link to={`/products/${productData.id}`} className={classes.card}>
      <article>
        <img src={productData.imageUrl} tag={productData.name} className={classes.img} />
        <h3 className={classes.h3} >{productData.name}</h3>
        <h4 className={classes.h4}>${productData.price}</h4>
        <strong>{productData.quantity}</strong>
      </article>
    </Link>
  );
};

export default ProductCard;
