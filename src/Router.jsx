import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>
        },
        {
            path: "shop",
            element: <ProductList />    
        },
        {
            path: "cart",
            element: <Cart />
        }
    ]);

    return ( 
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      );
}

export default Router;
