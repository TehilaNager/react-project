import { Link } from "react-router";
import { useAuth } from "../context/authContext";
import formatPhoneToInternational from "../helpers/formatPhoneToInternational";
import { useTheme } from "../context/themeContext";

function Card({ card, onLike = () => {}, onDelete = () => {} }) {
  const { user } = useAuth() || {};
  const { theme } = useTheme();
  const isOwned = card.user_id === user?._id;

  return (
    card && (
      <div
        className={`
        hover-zoom card m-2 shadow-lg rounded-5 d-flex flex-column mb-3
        ${theme === "dark" ? "bg-body-secondary" : ""}
      `}
        style={{ width: "18rem" }}
      >
        <Link
          to={`/card-info/${card._id}`}
          className="text-decoration-none text-black"
          state={card}
        >
          <img
            src={card.image.url}
            className="card-img-top rounded-top-5"
            style={{ height: "14rem" }}
            alt={card.image.alt}
          />
          <div className={`card-body ${theme === "dark" ? "text-light" : ""}`}>
            <h5 className="card-title">{card.title}</h5>

            <h6 className="card-subtitle my-2 text-body-secondary border-bottom pb-3">
              {card.subtitle}
            </h6>

            <div className="my-1">
              <span className="fw-bold">phone: </span>
              {card.phone}
            </div>

            <div className="my-1">
              <span className="fw-bold">Address: </span>
              {card.address.street} {card.address.houseNumber}{" "}
              {card.address.city} ,{card.address.country}
            </div>

            <div className="my-1">
              <span className="fw-bold">Card Namber: </span>
              {card._id}
            </div>
          </div>
        </Link>

        <div className="d-flex justify-content-evenly mb-3 mt-auto">
          <a href={`tel:${formatPhoneToInternational(card.phone)}`}>
            <i
              className={`bi bi-telephone-fill ${
                theme === "dark" ? "text-danger-emphasis" : "text-black"
              }`}
              style={{ cursor: "pointer" }}
            ></i>
          </a>
          {user && (
            <button
              style={{
                cursor: "pointer",
                border: "none",
                background: "none",
                padding: 0,
                color: card.liked ? "red" : "black",
              }}
              onClick={onLike}
            >
              <i
                className={`bi ${card.liked ? "bi-heart-fill" : "bi-heart"} ${
                  theme === "dark" ? "text-danger" : ""
                }`}
              ></i>
            </button>
          )}
          {(user?.isAdmin || (user?.isBusiness && isOwned)) && (
            <>
              <Link
                style={{ cursor: "pointer" }}
                to={`/edit-card/${card._id}`}
                state={card}
              >
                <i
                  className={`bi bi-pencil-fill text-black ${
                    theme === "dark" ? "text-info-emphasis" : ""
                  }`}
                ></i>
              </Link>
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: 0,
                }}
                onClick={onDelete}
              >
                <i
                  className={`bi bi-trash3-fill ${
                    theme === "dark" ? "text-warning" : ""
                  }`}
                ></i>
              </button>
            </>
          )}
        </div>
      </div>
    )
  );
}

export default Card;
