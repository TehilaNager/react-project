import { createContext, useContext, useState } from "react";
import usersService from "../services/usersService";

export const authContext = createContext();
authContext.displayName = "Auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(usersService.getUser());

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
      value={{ user, createUser: usersService.createUser, logIn, logOut }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
