import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";

function ProductCard({product}) {
    const [quantity, setQuantity] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false);
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
        <div style={{border: '1px solid black'}}>
            <Link
                to={`/product/${product.id}`}
                state={{ productData: product }}
            >
                <div>
                    <img src={product.image}  style={{width: '150px'}}/>
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            </Link>
            <div style={{borderTop: '1px solid black'}}>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" name="quantity" min={minQty} max={maxQty} value={quantity} onChange={handleQtyChange}/>
                <button onClick={() => addToCart(product, quantity)} disabled={isDisabled}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;