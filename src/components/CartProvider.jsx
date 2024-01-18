import { createContext, useEffect, useState } from "react";
import axios from "axios";

//Create default for the context
export const CartContext = createContext({
    products: [],
    cart: [],
    addToCart: () => {}
});

function CartProvider({children}) {
    const BASE_URL = "https://fakestoreapi.com/products";

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    //Update cart state
    const addToCart = (cartItem, qty) => {
      //Determine if item has already been added to cart
      const existingItemIndex = cart.findIndex(item => item.cartItem.id === cartItem.id);

      //Update qty if item has already been added to cart
      if (existingItemIndex !== -1) {
        setCart(prevCart => [
          //Create new array containing everything before the existing item
          ...prevCart.slice(0, existingItemIndex),

          //Shallow copy to keep existing properties and update qty
          {...prevCart[existingItemIndex], qty: prevCart[existingItemIndex].qty + qty},

          //Adds the remaining items in the array after the existing item.
          ...prevCart.slice(existingItemIndex + 1)
        ]);
      } else {
        setCart((prevCart) => [
          ...prevCart, {cartItem, qty}
        ]);
      }
    };

    const getTotal = () => {
      let total = 0;
      cart.map((item) => {
        total += item.cartItem.price * item.qty;
      });

      return total.toFixed(2);
    };
  
    //Get and set product data
    const fetchData = () => {
      return axios.get(BASE_URL)
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    //Display loading message while app fetches data
    if (loading) return <p>Loading... Please Wait</p>;

    return (
        <CartContext.Provider value={{ cart, products, addToCart, getTotal }}>
          {children}
        </CartContext.Provider>
      );
}

export default CartProvider;