import Header from "./Header";
import { CartContext } from "./CartProvider";
import { useContext } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";

function ProductList () {
    const { products } = useContext(CartContext);

    return (
        <>
            <Header />
            <div className={styles.productListContainer}>
                {products.map((product) =>  {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </>
    )
}

export default ProductList;