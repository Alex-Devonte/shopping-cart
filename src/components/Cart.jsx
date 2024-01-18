import { useContext } from "react";
import Header from "./Header";
import { CartContext } from "./CartProvider";

function Cart () {
    const { cart, getTotal, updateCart, deleteCartItem } = useContext(CartContext);

    const minQty = 1;
    const maxQty = 99;

    const handleQtyChange = (item, event) => {
        let newQty = parseInt(event.target.value);

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
        }
    }

    return (
        <>
            <Header />
            <div>
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
                                        <td><img src={item.cartItem.image}  style={{width: '150px'}}/></td>
                                        <td>${item.cartItem.price.toFixed(2)}</td>
                                        <td><input type="number" name="quantity" min={minQty} max={maxQty} value={item.qty}  onChange={(e) => handleQtyChange(item, e)}/></td>
                                        <td>${(item.cartItem.price * item.qty).toFixed(2)}</td>
                                        <td><button type="button" onClick={() => deleteCartItem(item.cartItem.id)}>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <p>Total: ${getTotal()}</p>
                        </div>
                    </>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </>
    )
}

export default Cart;