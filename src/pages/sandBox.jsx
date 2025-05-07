import { useEffect, useState } from "react";
import usersService from "../services/usersService";

function SandBox() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await usersService.getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <table className="table table-sm">
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
                <i
                  className="bi bi-info-circle-fill"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  className="bi bi-pencil-fill"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <i
                  className="bi bi-trash3-fill"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SandBox;
