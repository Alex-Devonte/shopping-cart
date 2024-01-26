import { useNavigate } from "react-router-dom";
import Header from "./Header";
import styles from "../styles/Homepage.module.css";

function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className={styles.homepageContainer}>
                <div className={styles.homepage}>
                    <h1>Welcome to Electronic Apparels!</h1>
                    <button type="button" id={styles.shopNowBtn} onClick={() => navigate("/shop")}>Shop Now</button>
                </div>
            </div>
        </>
    )
}

export default Homepage;