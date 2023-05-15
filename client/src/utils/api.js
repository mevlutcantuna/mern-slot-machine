import axios from "axios";

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api': 'https://mern-slot-machine.vercel.app/api'


export const instance = axios.create({
  baseURL: url,
});