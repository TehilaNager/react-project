import { createContext, useContext, useState, useEffect } from "react";
import usersService from "../services/usersService";
import { useLocation } from "react-router";

export const authContext = createContext();
authContext.displayName = "Auth";

export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(usersService.getUser());
  const [initialValueEdit, setInitialValueEdit] = useState({});

  const fetchCurrentUser = async () => {
    const response = await usersService.getUserById(user._id);
    setInitialValueEdit(response);
    return response;
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const location = useLocation();
  const userState = location.state;

  const fetchUsers = async () => {
    const data = await usersService.getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const remove = async (id) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };

  const updateUser = async (values) => {
    const response = await usersService.updateUserById(userState._id, values);
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
  };

  return (
    <authContext.Provider
      value={{
        user,
        createUser: usersService.createUser,
        logIn,
        logOut,
        users,
        remove,
        userState,
        updateUser,
        initialValueEdit,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
