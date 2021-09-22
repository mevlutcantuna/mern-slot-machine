import Home from "../components/Home";
import Signup from "../components/Signup";
import Login from "../components/Login";

export const router = {
    home:{
        title:"Home Page",
        path:"/",
        component: Home
    },
    login:{
        title:"Login Page",
        path:"/login",
        component: Login
    },
    signup:{
        title:"Signup Page",
        path:"/signup",
        component:Signup

    }
}