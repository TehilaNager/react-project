import { Link } from "react-router";
import { useAuth } from "../context/authContext";

function SandBox() {
  const { users, remove } = useAuth();

  return (
    <div className="container mt-5">
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
                  style={{ cursor: "pointer" }}
                  to={`/user-info/${user._id}`}
                >
                  <i className="bi bi-info-circle-fill text-black"></i>
                </Link>
              </td>
              <td>
                <Link
                  style={{ cursor: "pointer" }}
                  to={`/edit-user/${user._id}`}
                  state={user}
                >
                  <i className="bi bi-pencil-fill text-black"></i>
                </Link>
              </td>
              <td>
                {!user.isAdmin && (
                  <button
                    style={{
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      padding: 0,
                    }}
                    onClick={() => remove(user._id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SandBox;
