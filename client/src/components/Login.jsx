import React,{useState,useEffect} from "react";
import "../styles/login.scss";
import { Spin } from "antd";

import { router } from "../routers/router";
import { Link, useHistory } from "react-router-dom";
import { login } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../utils/isLogin";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  
  const loading = useSelector((state) => state.auth.loading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
      (isLogin() || isLoggedIn) && history.push("/")
  }, [isLoggedIn,history])

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const submitLoginForm = (e) => {
    e.preventDefault();
    dispatch(login({email,password}))
  }

  return (
    <Spin tip="waiting for logging in" spinning={loading}>
      <div className="login">
        <div className="login__title">Log In</div>
        <div className="login__is-member">
          <span>Already a member?</span>
          <Link to={router.signup.path}>Sign Up</Link>
        </div>
        <div className="login__form">
          <form onSubmit={submitLoginForm} style={{ display: "flex", flexDirection: "column" }}>
            <label className="login__form__label">Email</label>
            <input value={email} onChange={handleChangeEmail} type="text" className="login__form__input" />
            <label className="login__form__label">Password</label>
            <input value={password} onChange={handleChangePassword} type="password" className="login__form__input" />
            <button type="submit" className="login__form__button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </Spin>
  );
};

export default Login;