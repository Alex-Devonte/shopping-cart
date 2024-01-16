import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";

function Header() {
    const { cart } = useContext(CartContext);
    return (
        <div className="header">
            <Link to="/" className="header-link">Home </Link>
            <Link to="/shop"className="header-link">Shop </Link>
            <Link to="/cart"className="header-link">Cart <span className="cart-item-count">{cart.length}</span></Link>
        </div>
    )
}

export default Header;