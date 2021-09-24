import React from "react";
import "../styles/Navbar.scss";
import LogoutLogo from "../assets/logout-white.svg";

import { useDispatch, useSelector } from "react-redux";
import { AUTH } from "../store/constants/auth";
import { useHistory } from "react-router";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const clickLogout = () => {
    dispatch({ type: AUTH.LOGOUT_SUCCESS });
    history.push("/login");
  };

  return (
    <div className="navbar">
      <span className="navbar__title">Slot Machine</span>
      <div className="navbar__right">
        <span>{user?.fullName}</span>
        <span className="navbar__right__coins" >{user?.coins} Coins</span>
        <button onClick={clickLogout} className="navbar__right__logout">
          <img src={LogoutLogo} alt="logout-logo" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
