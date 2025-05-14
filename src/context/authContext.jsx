import { createContext, useContext, useState, useEffect } from "react";
import usersService from "../services/usersService";
import { successFeedback } from "../helpers/feedback";

export const authContext = createContext();
authContext.displayName = "Auth";

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(usersService.getUser());

  const fetchUsers = async () => {
    if (user?.isAdmin) {
      const data = await usersService.getAllUsers();
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  const remove = async (id) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };

  const updateUser = async (id, values) => {
    const response = await usersService.updateUserById(id, values);
    fetchUsers();
    return response;
  };

  const refreshUser = () => setUser(usersService.getUser());

  const logIn = async (credentials) => {
    const response = await usersService.logIn(credentials);
    refreshUser();
    return response;
  };

  const logOut = () => {
    usersService.logOut();
    refreshUser();
    successFeedback("Logout successful. Goodbye");
  };

  const updateTypeUser = async (id) => {
    const response = await usersService.updateIsBusiness(id);
    fetchUsers();
    return response;
  };

  return (
    <authContext.Provider
      value={{
        user,
        users,
        createUser: usersService.createUser,
        logIn,
        logOut,
        remove,
        updateUser,
        updateTypeUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
