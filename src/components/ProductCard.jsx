import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";
import PropTypes from 'prop-types';
import styles from "../styles/ProductCard.module.css";

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
};


function ProductCard({product}) {
    const [quantity, setQuantity] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const { addToCart } = useContext(CartContext);

    const minQty = 1;
    const maxQty = 99;

    const handleQtyChange = (event) => {
        let newQty = parseInt(event.target.value);
        setIsDisabled(false);

        //Prevent qty from being set outside the bounds
        if (!isNaN(newQty)) {
            if (newQty > maxQty) {
                newQty = maxQty;
            } else if (newQty < minQty) {
                newQty = minQty;
            }
            setQuantity(newQty);
        } else {
            setIsDisabled(true);
            setQuantity('');
        }
    }

    return (
        <div className={styles.productCard}>
            <Link
                to={`/products/${product.id}`}
                state={{ productData: product }}
            >
                <div className={styles.productImgContainer}>
                    <img className={styles.productImg} src={product.image}/>
                </div>
                <div className={styles.productInfoSection}>
                    <p>{product.title}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            </Link>
            <div className={styles.purchaseSection}>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" className={styles.quantityInput} id="quantity" name="quantity" min={minQty} max={maxQty} value={quantity} onChange={handleQtyChange}/>
                <button className={styles.addToCartBtn} onClick={() => addToCart(product, quantity)} disabled={isDisabled}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;