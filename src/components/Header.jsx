import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";
import styles from "../styles/Header.module.css";

function Header() {
    const { cart } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      
    return (
        <div className={styles.header}>
            {/* Apply menuOpen class to button when menu is open */}
            <button className={`${styles.hamburgerIcon}  ${isMenuOpen ? styles.menuOpen : ""}`} onClick={toggleMenu}>
                &#9776;
            </button>
            {isMenuOpen && (
                <div className={styles.menu}>
                    <Link to="/" className={styles.headerLink} onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to="/shop" className={styles.headerLink} onClick={toggleMenu}>
                        Shop
                    </Link>
                </div>
            )}
            {/* Add class to display links on medium and large screens */}
            <Link to="/" className={`${styles.headerLink} ${styles.nonSmallScreen}`}>
                Home
            </Link>
            <Link to="/shop" className={`${styles.headerLink} ${styles.nonSmallScreen}`}>
                Shop
            </Link>
            <Link to="/cart" className={styles.headerLink}>
                Cart <span className={styles.cartItemCount}>{cart.length}</span>
            </Link>
        </div>
    );
}

export default Header;