import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        Library Log System
      </Link>
      <Link className="navbar__link" to="/about">
        About
      </Link>
      <Link className="navbar__link" to="/favorites">
        Favorites
      </Link>
    </nav>
  );
};

export default NavBar;
