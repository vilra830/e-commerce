import { createContext, useState, useEffect } from "react";
import { getAllProducts , updateOrder} from "../services/product-services";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import CartPage from "../pages/CartPage/CartPage";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFetchStatus("LOADING");
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setFetchStatus("SUCCESS");
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, []);

  //add a function that returns a product using the id from Products Page SElection of Products
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };


  //adds Product to Cart in Product Page - Cart should be able to access this information

  const addProductToCart = (product) => {
    setCart((currentCart) => {
      const productInCart = currentCart.find((item) => item.id === product.id);
      console.log("Is the product in the Cart?" + productInCart);
      
      if (productInCart) {

        return currentCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity +1} : item );


      } else {
        console.log(currentCart);

        return [...currentCart, {...product, quantity:1}];
      }

      
    });

    
  }

  //process order - use async as this access firestore and we need to wait
  const processOrder = async () => {
    updateOrder(cart);
    setCart([]);
    alert("Successfully processed");
  }


  return (
    <>
      <ProductsContext.Provider
        value={{ products, error, fetchStatus, cart, getProductById, addProductToCart , processOrder}}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;
