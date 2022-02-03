import { Link } from "react-router-dom";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>

        <Link to="/posts">
          <button>Posts</button>
        </Link>

        <Link to="/converter">
          <button>Converter</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
