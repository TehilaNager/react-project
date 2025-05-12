import { useLocation } from "react-router";
import { useTheme } from "../context/themeContext";

function CardInfo() {
  const location = useLocation();
  const card = location.state;

  const { theme } = useTheme();

  const fullAddress = `${card.address.street} ${card.address.houseNumber}, ${card.address.city}, ${card.address.state}, ${card.address.zip}, ${card.address.country}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&output=embed`;

  return (
    <div
      className={`container shadow-lg p-5 mt-4 mt-md-0 mb-0 mt-md-5 mb-md-5 rounded rounded-5 text-start border border-0 border-md-5 border-dark-emphasis ${
        theme === "dark" ? "bg-body-secondary text-white" : ""
      }`}
    >
      <div className="row">
        <div className="col-md-5">
          <h1 className="fw-bold mb-2">{card.title}</h1>
          <h4 className="text-muted mb-4">{card.subtitle}</h4>
          <p className="fs-4 mb-4">{card.description}</p>

          <div className="mb-4 fs-4">
            <div className="border-bottom pb-2 mb-2">
              📞 <strong>Phone: </strong> {card.phone}
            </div>
            <div className="border-bottom pb-2 mb-2">
              ✉️ <strong>Email: </strong>
              <a href={`mailto:${card.email}`} className="link-primary ms-1">
                {card.email}
              </a>
            </div>
            <div className="border-bottom pb-2 mb-2">
              🌐 <strong>Web: </strong>
              <a
                href={card.web}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary ms-1"
              >
                {card.web}
              </a>
            </div>
            <div>
              🗺️ <strong>Address: </strong>
              {card.address.street} {card.address.houseNumber},{" "}
              {card.address.city}, {card.address.state}, {card.address.zip},{" "}
              {card.address.country}.
            </div>
          </div>
        </div>

        <div className="col-md-7 mt-4 mt-md-0 order-md-2 order-1">
          <div
            className={`p-0 p-md-2 h-100 ${
              theme === "dark" ? "bg-dark" : "bg-light"
            }`}
            style={{ height: "100%" }}
          >
            <div
              className="ratio ratio-16x9 rounded overflow-hidden"
              style={{ height: "100%" }}
            >
              <iframe
                src={mapSrc}
                title="Business Location"
                allowFullScreen
                loading="lazy"
                style={{ border: "none", height: "100%", width: "100%" }}
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
