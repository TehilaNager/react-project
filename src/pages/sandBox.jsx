import { Link } from "react-router";
import { useAuth } from "../context/authContext";

function SandBox() {
  const { users, remove } = useAuth();

  return (
    <div className="container mt-5">
      <div className="d-none d-md-block">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>
                    {user.name.first} {user.name.last}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      to={`/user-info/${user._id}`}
                      style={{ cursor: "pointer" }}
                      state={user}
                    >
                      <i className="bi bi-info-circle-fill text-danger-emphasis"></i>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/edit-user/${user._id}`}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-pencil-fill text-primary ps-2"></i>
                    </Link>
                  </td>
                  <td>
                    {!user.isAdmin && (
                      <button
                        onClick={() => remove(user._id)}
                        style={{
                          cursor: "pointer",
                          border: "none",
                          background: "none",
                          padding: 0,
                        }}
                      >
                        <i className="bi bi-trash3-fill text-danger px-2"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-block d-md-none">
        {users.map((user) => (
          <div key={user._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                {user.name.first} {user.name.last}
              </h5>
              <p className="card-text mb-1">
                <strong>ID:</strong> {user._id}
              </p>
              <p className="card-text mb-1">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="card-text mb-1">
                <strong>Phone:</strong> {user.phone}
              </p>
              <div className="d-flex gap-3 mt-2">
                <Link to={`/user-info/${user._id}`} state={user}>
                  <i className="bi bi-info-circle-fill text-danger-emphasis"></i>
                </Link>
                <Link to={`/edit-user/${user._id}`} state={user}>
                  <i className="bi bi-pencil-fill text-primary"></i>
                </Link>
                {!user.isAdmin && (
                  <button
                    onClick={() => remove(user._id)}
                    style={{ border: "none", background: "none", padding: 0 }}
                  >
                    <i className="bi bi-trash3-fill text-danger"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SandBox;
