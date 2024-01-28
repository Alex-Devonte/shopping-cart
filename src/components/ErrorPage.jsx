import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div id="error">
            <h1>This route does not exist!</h1>
            <Link to="/">Click here to return to the homepage.</Link>
        </div>
    )
}

export default ErrorPage;