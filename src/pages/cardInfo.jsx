import { useLocation } from "react-router";

function CardInfo() {
  const location = useLocation();
  const card = location.state;

  const fullAddress = `${card.address.street} ${card.address.houseNumber}, ${card.address.city}, ${card.address.state}, ${card.address.zip}, ${card.address.country}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&output=embed`;

  return (
    <div className="container shadow-lg p-5 my-5 bg-white rounded text-start">
      <div className="row">
        <div className="col-md-5">
          <h1 className="fw-bold mb-2">{card.title}</h1>
          <h4 className="text-muted mb-4">{card.subtitle}</h4>
          <p className="fs-5 mb-4">{card.description}</p>

          <ul className="list-group list-group-flush mb-4 fs-5">
            <li className="list-group-item border-0 px-0 py-2">
              📞 <strong>Phone: </strong> {card.phone}
            </li>
            <li className="list-group-item border-0 px-0 py-2">
              ✉️ <strong>Email: </strong>
              <a href="mailto:tehila@kahf.com" className="link-primary">
                {card.email}
              </a>
            </li>
            <li className="list-group-item border-0 px-0 py-2">
              🌐 <strong>Web: </strong>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                {card.web}
              </a>
            </li>
            <li className="list-group-item border-0 px-0 py-2">
              🗺️ <strong>Address: </strong>
              {card.address.street} {card.address.houseNumber},{" "}
              {card.address.city}, {card.address.state}, {card.address.zip},{" "}
              {card.address.country}.
            </li>
          </ul>
        </div>

        <div className="col-md-7 mt-4 mt-md-0">
          <div className="p-2 bg-light rounded shadow-sm h-100">
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                src={mapSrc}
                title="Business Location"
                allowFullScreen
                loading="lazy"
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
