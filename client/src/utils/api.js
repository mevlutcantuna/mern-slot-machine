import axios from "axios";

export const instance = axios.create({
  baseURL: "https://slot-machine-mct-backend.herokuapp.com/api",
});