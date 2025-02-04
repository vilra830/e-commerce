import { ProductsContext } from "../../context/ProductsContextProvider";
import { useContext } from "react";
import classes from "./CartPage.module.scss";



const CartPage = () => {

    const {cart , processOrder , removeItem} = useContext(ProductsContext);
    const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price,0 );


return (
    <>
    <div className={classes.wrapper}>
    <h1>Food Summary</h1>
    {cart.length === 0 ? <h4>Cart is Empty</h4> : 
        <ul>
        {cart.map((item) => (
            <li key={item.id} className={classes.item}>
            <img src={item.imageUrl} alt={item.name} width="100" />
                         
                <h2>{item.name}</h2>
                <p>Price: ${item.price} </p>
                <p>Quantity: {item.quantity}</p>
                <strong>Total Per Item: {item.quantity * item.price}</strong>
                <button className={classes.button} onClick={() => removeItem(item)}>Remove item</button>

                
            </li>
        ))}
        
                    <h3>Total Amount {totalAmount} </h3>

    </ul>
    
    }
         </div>

    <div className={classes.button}>

    {cart.length > 0 && <button onClick={() => processOrder(cart)}>Process Order</button>}

    </div>
    </>
);

};

export default CartPage;