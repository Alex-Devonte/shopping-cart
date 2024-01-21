import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function ProductDetail() {
    const {state} = useLocation();
    const product = state.productData;
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div>
                <div>
                    <img src={product.image} />
                </div>
                <div>   
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
                <button type="button" onClick={() => navigate('/shop')}>Back to shop</button>
            </div>
        </>
    )
}

export default ProductDetail;