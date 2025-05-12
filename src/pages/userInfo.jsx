import { useLocation } from "react-router";

function UserInfo() {
  const location = useLocation();
  const user = location.state;

  return (
    <div className="d-flex align-items-center justify-content-center bg-light">
      <div className="container mt-5">
        <div className="border rounded shadow p-4 bg-white">
          <div className="row">
            <div className="col-md-8 d-flex flex-column align-items-start">
              <div className="mb-4 border-bottom pb-3">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={user.image.url}
                    alt={user.image.alt}
                    className="rounded-circle me-3"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h3 className="fw-bold mb-0">
                      {user.name.first} {user.name.middle} {user.name.last}
                    </h3>
                    <span className="badge bg-secondary">
                      <strong>Type user:</strong>
                      {/* {() => {
                        if (user.isBusiness) {
                          return "business";
                        } else {
                          if (user.isAdmin) {
                            return "Admin";
                          } else {
                            return "Regular";
                          }
                        }
                      }} */}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4 border-bottom pb-3">
                <h4 className="fw-bold mb-3">Contact</h4>
                <ul className="list-group list-group-flush fs-5">
                  <li className="list-group-item border-0 px-0 py-2">
                    📞 <strong>Phone:</strong> {user.phone}
                  </li>
                  <li className="list-group-item border-0 px-0 py-2">
                    ✉️ <strong>Email:</strong>
                    <a href={user.email} className="link-primary ms-1">
                      {user.email}
                    </a>
                  </li>
                  {user.web && (
                    <li className="list-group-item border-0 px-0 py-2">
                      🌐 <strong>Web:</strong>
                      <a
                        href={user.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-primary ms-1"
                      >
                        {user.web}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div className="">
                <h4 className="fw-bold mb-3">Address</h4>
                <ul className="list-group list-group-flush fs-5">
                  <li className="list-group-item border-0 px-0 py-2">
                    🗺️ <strong>Address:</strong> {user.address.street}
                    {user.address.houseNumber}, {user.address.city},
                    {user.address.state}, {user.address.zip},
                    {user.address.country}.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
