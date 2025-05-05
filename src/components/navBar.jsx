import { Link, NavLink } from "react-router";
import Logo from "./common/logo";
import { useAuth } from "../context/authContext";
import { useCards } from "../context/cardsContext";

function NavBar() {
  const { user } = useAuth();
  const { search, term } = useCards();

  return (
    <nav
      className="navbar navbar-dark navbar-expand-md bg-primary"
      aria-label="Third navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>

            {user && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  aria-current="page"
                  to="/fav-cards"
                >
                  Fav Cards
                </NavLink>
              </li>
            )}

            {user?.isBusiness && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  aria-current="page"
                  to="/my-cards"
                >
                  My Cards
                </NavLink>
              </li>
            )}

            {user?.isAdmin && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  aria-current="page"
                  to="/sandbox"
                >
                  SandBox
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
            <li className="nav-item">
              <form role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search "
                  aria-label="Search"
                  value={term}
                  onChange={(e) => search(e.target.value)}
                />
              </form>
            </li>

            <i className="bi bi-moon-fill ms-3 fs-4"></i>

            {user ? (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                  to="/sign-out"
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    to="/sign-up"
                  >
                    Sign Up
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                    to="/sign-in"
                  >
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
