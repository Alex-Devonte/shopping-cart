import { useLocation } from "react-router-dom";
import Header from "./Header";

function ProductDetail() {
    const {state} = useLocation();
    const product = state.productData;

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
            </div>
        </>
    )
}

export default ProductDetail;