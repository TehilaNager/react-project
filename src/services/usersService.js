import httpService from "./httpService";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

refreshToken();

function createUser(values) {
    return httpService.post("/users", values);
}

async function logIn(credentials) {
    const response = await httpService.post("/users/login", credentials);
    setToken(response.data);
    return response.data;
}

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
    refreshToken();
}

function refreshToken() {
    httpService.setDefaulHeaders("x-auth-token", getJWT());
}

function getJWT() {
    return localStorage.getItem(TOKEN_KEY);
}

function logOut() {
    setToken(null);
}

function getUser() {
    try {
        const token = getJWT();
        return jwtDecode(token);
    } catch {
        return null;
    }
}

const usersService = {
    createUser,
    logIn,
    logOut,
    getJWT,
    getUser
};

export default usersService;