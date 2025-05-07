import httpService from "./httpService";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

refreshToken();

async function createUser(values) {
    const response = await httpService.post("/users", values);
    return response.data;
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

async function getUserById(id) {
    const response = await httpService.get(`/users/${id}`)
    return response.data;
}

async function getAllUsers() {
    const response = await httpService.get("/users")
    return response.data;
}

async function deleteUser(id) {
    const response = await httpService.delete(`users/${id}`);
    return response.data;
}

async function updateUserById(id, userData) {
    const response = await httpService.put(`users/${id}`, userData)
    return response.data;
}

async function updateIsBusiness(id) {
    const response = await httpService.patch(`/users/${id}`)
    return response.data;
}

const usersService = {
    createUser,
    logIn,
    logOut,
    getJWT,
    getUser,
    getAllUsers,
    deleteUser,
    updateUserById,
    getUserById
};

export default usersService;