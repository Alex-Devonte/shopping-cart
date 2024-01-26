import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/ProductDetail.module.css";

function ProductDetail() {
    const {state} = useLocation();
    const product = state.productData;
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.productDetailContainer}>
                <div className={styles.detailImageContainer}>
                    <img className={styles.detailImage} src={product.image} />
                </div>
                <div className={styles.detailInfo}>   
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                </div>
                <button type="button" className={styles.backToShopBtn} onClick={() => navigate('/shop')}>Back to shop</button>
            </div>
        </>
    )
}

export default ProductDetail;