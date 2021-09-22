import axios from "axios";

const accessToken = JSON.stringify(localStorage.getItem("accessToken"));
console.log("acces",accessToken);

export const instance = axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{'Authorization': `Barear ${accessToken}`}
});