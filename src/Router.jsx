import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";
import ProductDetail from "./components/ProductDetail";

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
            path: "product/:id",
            element: <ProductDetail />
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
