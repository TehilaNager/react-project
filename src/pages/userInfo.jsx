import { useLocation } from "react-router";
import { useTheme } from "../context/themeContext";

function UserInfo() {
  const location = useLocation();
  const user = location.state;

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`d-flex align-items-center justify-content-center mt-5 ${
        isDark ? "bg-dark text-white" : "bg-light"
      }`}
    >
      <div className="container d-flex justify-content-center align-items-center">
        <div
          className={`border rounded shadow p-4 ${
            isDark ? "bg-body-secondary text-white border-light" : "bg-white"
          }`}
          style={{
            width: "100%",
            maxWidth: "700px",
            minHeight: "500px",
          }}
        >
          <div className="row">
            <div className="col-md-12 d-flex flex-column align-items-start">
              <div className="mb-4 border-bottom pb-3 w-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={user.image.url}
                    alt={user.image.alt}
                    className="rounded-circle me-3 border"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h3 className="fw-bold mb-0">
                      {user.name.first} {user.name?.middle} {user.name.last}
                    </h3>
                    <span
                      className={`badge ms-1 ${
                        isDark ? "bg-secondary text-light" : "bg-secondary"
                      }`}
                    >
                      <strong>Type user:</strong>{" "}
                      {user.isAdmin
                        ? "Admin"
                        : user.isBusiness
                        ? "Business"
                        : "Regular"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4 border-bottom pb-3 w-100">
                <h4 className="fw-bold mb-3">Contact</h4>
                <div className="fs-5">
                  <div className="mb-2">
                    📞 <strong>Phone:</strong> {user.phone}
                  </div>
                  <div className="mb-2">
                    ✉️ <strong>Email:</strong>
                    <a
                      href={`mailto:${user.email}`}
                      className={`ms-1 ${
                        isDark ? "text-info" : "link-primary"
                      }`}
                    >
                      {user.email}
                    </a>
                  </div>
                  {user.web && (
                    <div className="mb-2">
                      🌐 <strong>Web:</strong>
                      <a
                        href={user.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ms-1 ${
                          isDark ? "text-info" : "link-primary"
                        }`}
                      >
                        {user.web}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-100">
                <h4 className="fw-bold mb-3">Address</h4>
                <div className="fs-5">
                  🗺️ <strong>Address:</strong> {user.address.street}
                  {user.address.houseNumber}, {user.address.city},{" "}
                  {user.address.state === "not defined"
                    ? ""
                    : `${user.address.state},`}{" "}
                  {user.address.zip}, {user.address.country}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
