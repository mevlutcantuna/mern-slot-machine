import axios from "axios";

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api': 'https://slot-machine-mct-backend.herokuapp.com/api'


export const instance = axios.create({
  baseURL: url,
});