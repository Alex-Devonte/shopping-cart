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
    const addToCart = (newItem) => {
      setCart((prevCart) => [
        ...prevCart, newItem
      ]);
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
        <CartContext.Provider value={{ cart, products, addToCart }}>
          {children}
        </CartContext.Provider>
      );
}

export default CartProvider;