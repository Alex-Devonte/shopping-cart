import Header from "./Header";
import { CartContext } from "./CartProvider";
import { useContext } from "react";
import ProductCard from "./ProductCard";

function ProductList () {
    const { products } = useContext(CartContext);

    return (
        <>
            <Header />
            <div>
                {products.map((product) =>  {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </>
    )
}

export default ProductList;