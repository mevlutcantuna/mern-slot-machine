import React, { useState, useEffect } from "react";
import "../styles/Signup.scss";
import { Spin } from "antd";

import { Link, useHistory } from "react-router-dom";
import { router } from "../routers/router";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/auth";

import { AUTH } from "../store/constants/auth";

import { errorMessage } from "../utils/notifications";
import { isLogin } from "../utils/conditions";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    isLogin() && history.push("/");
    dispatch({type:AUTH.RESET})
    user && history.push("/login");

  }, [history,dispatch,user]);

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitSignupForm = (e) => {
    e.preventDefault();

    // check inputs are not empty
    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return errorMessage("Inputs must not be Empty...");
    }

    // check characters of password is at least 6
    const characterOfPassword = password.split("").length;
    if (characterOfPassword < 6) {
      return errorMessage("Password must include at least 6 characters");
    }

    dispatch(signup({ fullName, email, password }));

  };

  return (
    <Spin tip="waiting for signing up" spinning={loading}>
      <div className="signup">
        <div className="signup__title">Sign Up</div>
        <div className="signup__is-member">
          <span>Already a member?</span>
          <Link to={router.login.path}>Log In</Link>
        </div>
        <div className="signup__form">
          <form
            onSubmit={submitSignupForm}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label className="signup__form__label">Full Name</label>
            <input
              value={fullName}
              onChange={handleChangeFullName}
              type="text"
              className="signup__form__input"
            />
            <label className="signup__form__label">Email</label>
            <input
              value={email}
              onChange={handleChangeEmail}
              type="email"
              className="signup__form__input"
            />
            <label className="signup__form__label">Password</label>
            <input
              value={password}
              onChange={handleChangePassword}
              type="password"
              className="signup__form__input"
            />
            <button type="submit" className="signup__form__button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Spin>
  );
};

export default Signup;
