import { NavLink } from "react-router";
import { useAuth } from "../context/authContext";

function Footer() {
  const { user } = useAuth();

  return (
    <footer className="container d-flex justify-content-evenly align-items-center">
      <NavLink
        className="bi bi-exclamation-circle-fill nav-link d-flex flex-column text-center my-2"
        aria-current="page"
        to="/about"
      >
        <span>About</span>
      </NavLink>

      {user && (
        <NavLink
          className="bi bi-heart-fill nav-link d-flex flex-column text-center my-2"
          aria-current="page"
          to="/fav-cards"
        >
          <span>Favorites</span>
        </NavLink>
      )}

      {user?.isBusiness && (
        <NavLink
          className="bi bi-person-vcard-fill nav-link d-flex flex-column text-center my-2"
          aria-current="page"
          to="/my-cards"
        >
          <span>My Cards</span>
        </NavLink>
      )}
    </footer>
  );
}

export default Footer;
