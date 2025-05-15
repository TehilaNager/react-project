import { Link, NavLink } from "react-router";
import Logo from "./common/logo";
import { useAuth } from "../context/authContext";
import { useCards } from "../context/cardsContext";
import { useTheme } from "../context/themeContext";

function NavBar() {
  const { user } = useAuth();
  const { search, term } = useCards();
  const { saveTheme, theme } = useTheme();
  return (
    <nav
      className={`
      navbar navbar-dark navbar-expand-md bg-primary
      ${theme === "dark" ? "bg-black" : ""}
    `}
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

            {user?.isBusiness || user?.isAdmin ? (
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
            ) : null}

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

          <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center gap-3">
            <li className="nav-item me-2">
              <form role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={term}
                  onChange={(e) => search(e.target.value)}
                />
              </form>
            </li>

            <button
              style={{
                cursor: "pointer",
                border: "none",
                background: "none",
                padding: 0,
              }}
              onClick={() => saveTheme()}
            >
              <i className="bi bi-moon-fill fs-4 ms-2"></i>
            </button>

            {user ? (
              <div
                className="dropdown text-center"
                style={{ display: "inline-block", position: "relative" }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1896/1896513.png"
                  alt="Profile"
                  className="dropdown-toggle mx-3"
                  data-bs-toggle="dropdown"
                  style={{
                    width: "50px",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                />
                <ul
                  className="dropdown-menu shadow text-center"
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <li>
                    <Link
                      className="dropdown-item text-danger px-4 py-2"
                      to={`/edit-user/${user?._id}`}
                    >
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-danger px-4 py-2"
                      to="/sign-out"
                    >
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
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
