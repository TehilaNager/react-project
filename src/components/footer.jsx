import { NavLink } from "react-router";
import { useAuth } from "../context/authContext";
import { useTheme } from "../context/themeContext";

function Footer() {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <footer
      className={[
        "mt-md-auto mt-1 border-top d-flex justify-content-evenly align-items-center py-md-2 py-1", // הורדתי את הרווחים
        theme === "light" ? "bg-white" : undefined,
      ].join(" ")}
    >
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
