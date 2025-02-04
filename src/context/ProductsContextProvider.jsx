import { createContext, useState, useEffect } from "react";
import { getAllProducts , updateOrder} from "../services/product-services";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

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

  const removeItem = (product) => {

      if (product.quantity === 1) {
        
        setCart((currentCart) => currentCart.filter((item) => item.id !== product.id)      
      )
    } else {

      setCart((currentCart) => currentCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity -1} : item
    )
  );
    
 
    }

      

    };



  //adds Product to Cart in Product Page - Cart should be able to access this information

  const addProductToCart = (product) => {
    setCart((currentCart) => {
      //check if the product is in the cart 
      const productInCart = currentCart.find((item) => item.id === product.id);
      console.log("Is the product in the Cart?" + productInCart);
      //if it is in the cart, update its quantity by 1 
      if (productInCart) {

        setProductQuantity(productInCart.quantity + 1);
        return currentCart.map((item) => { 

        if(item.id === product.id) {
        return {...item, quantity: item.quantity +1};
        }
        return item;
      });

      } else {

        //add product into the cart with a quantity of 1 
        console.log("Adding new Product:" , product);
        setProductQuantity(1);

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
        value={{ products, error, fetchStatus, cart, getProductById, addProductToCart , processOrder , productQuantity, removeItem}}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;
