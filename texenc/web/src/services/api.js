import axios from "axios";
import getToken from "./auth";

const api = axios.create({
    baseURL: "http://xyz.texenc.com/api/"
    // baseURL: "http://localhost:3001/api"
});

const token = getToken;
api.interceptors.request.use(async config => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;