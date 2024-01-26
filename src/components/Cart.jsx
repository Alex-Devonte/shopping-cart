import { useContext, useState } from "react";
import Header from "./Header";
import { CartContext } from "./CartProvider";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css";

function Cart () {
    const { cart, getTotal, updateCart, deleteCartItem, clearCart } = useContext(CartContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const minQty = 1;
    const maxQty = 99;

    const navigate = useNavigate();

    const handleQtyChange = (item, event) => {
        let newQty = parseInt(event.target.value);
        setIsDisabled(false);

        //Prevent qty from being set outside the bounds
        if (!isNaN(newQty)) {
            if (newQty > maxQty) {
                newQty = maxQty;
            } else if (newQty < minQty) {
                newQty = minQty;
            }
            updateCart(item.cartItem, newQty);
        } else {
            //Prevent NaN
            updateCart(item.cartItem, '');

            //Disable checkout button if quantity field is blank
            setIsDisabled(true);
        }
    }

    const checkout = () => {
        clearCart();
        alert("Thank you for your purchase! Click Ok to return to the homepage...");
        navigate("/");
    }

    return (
        <>
            <Header />
            <div className={styles.cartContainer}>
                {cart.length > 0 ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <td>Item</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.cartItem.id}>
                                        <td className={styles.itemTd}>
                                            <Link to={`/products/${item.cartItem.id}`} state={{ productData: item.cartItem }}>
                                                <img src={item.cartItem.image} />
                                            </Link>
                                            <p>{item.cartItem.title}</p>
                                        </td>
                                        <td>${item.cartItem.price.toFixed(2)}</td>
                                        <td><input type="number" name="quantity" min={minQty} max={maxQty} value={item.qty}  onChange={(e) => handleQtyChange(item, e)}/></td>
                                        <td>${(item.cartItem.price * item.qty).toFixed(2)}</td>
                                        <td><button type="button" onClick={() => deleteCartItem(item.cartItem.id)}>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={styles.checkout}>
                            <p>Total: ${getTotal()}</p>
                            <Link to="/shop">Keep shopping</Link>
                            <button type="button" disabled={isDisabled} onClick={checkout}>Check out</button>
                        </div>
                    </>
                ) : (
                    <p className={styles.emptyMsg}>Your cart is empty</p>
                )}
            </div>
        </>
    )
}

export default Cart;