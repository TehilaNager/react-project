import { Link } from "react-router";
import { useAuth } from "../context/authContext";

function Card({ card, onLike = () => {}, onDelete = () => {} }) {
  const { user } = useAuth() || {};

  return (
    card && (
      <div
        className="hover-zoom card m-2 shadow-lg rounded-5"
        style={{ width: "18rem" }}
      >
        <img
          src={card.image.url}
          className="card-img-top rounded-top-5"
          style={{ height: "14rem" }}
          alt={card.image.alt}
        />
        <div className="card-body">
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
            {card.address.street} {card.address.houseNumber} {card.address.city}{" "}
            ,{card.address.country}
          </div>

          <div className="my-1">
            <span className="fw-bold">Card Namber: </span>
            {card._id}
          </div>

          <div className="d-flex justify-content-evenly mt-2 pt-3">
            <i
              className="bi bi-telephone-fill"
              style={{ cursor: "pointer" }}
            ></i>
            {user && (
              <i
                style={{
                  cursor: "pointer",
                  color: card.liked ? "red" : "black",
                }}
                className={card.liked ? "bi bi-heart-fill" : "bi bi-heart"}
                onClick={onLike}
              ></i>
            )}
            <div></div>
            {user?.isAdmin && (
              <>
                <Link
                  className="bi bi-pencil-fill text-black"
                  style={{ cursor: "pointer" }}
                  to="/edit-card"
                  state={card}
                ></Link>
                <i
                  className="bi bi-trash3-fill"
                  style={{ cursor: "pointer" }}
                  onClick={onDelete}
                ></i>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Card;
