import { useLocation } from "react-router-dom";

function ProductDetail() {
    const {state} = useLocation();
    const product = state.productData;

    return (
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
    )
}

export default ProductDetail;