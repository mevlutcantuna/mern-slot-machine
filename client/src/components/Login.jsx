import React from "react";
import "../styles/login.scss";
import { Spin } from "antd";
import { router } from "../routers/router";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Spin tip="waiting for logging in" spinning={false}>
      <div className="login">
        <div className="login__title">Log In</div>
        <div className="login__is-member">
          <span>Already a member?</span>
          <Link to={router.signup.path}>Sign Up</Link>
        </div>
        <div className="login__form">
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label className="login__form__label">Email</label>
            <input type="text" className="login__form__input" />
            <label className="login__form__label">Password</label>
            <input type="password" className="login__form__input" />
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
