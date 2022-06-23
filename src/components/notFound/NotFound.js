import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div class="wrapper">
      <h2>Oops! Page not found.</h2>
      <div>
        <img
          src="https://www.gridam.com/wp-content/uploads/2017/01/erreur-404.png"
          alt="404"
        />
      </div>
      <h4>We can't fint the page you're looking for.</h4>
      <Link className="" to="/">
        <button type="button" class="btn btn-info btn-lg main-btn">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
