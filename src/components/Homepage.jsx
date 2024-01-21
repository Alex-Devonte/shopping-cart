import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <h1>Welcome to Electronic Apparels!</h1>
            <button type="button" onClick={() => navigate("/shop")}>Shop Now</button>
        </>
    )
}

export default Homepage;