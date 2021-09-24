import axios from "axios";

export const instance = axios.create({
    baseURL:"https://mern-slot-machine-backend.herokuapp.com/api",
});