import React, { useEffect } from "react";
import "../styles/Home.scss";
import { Spin } from "antd";

import Navbar from "./Navbar";
import Game from "./Game";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/auth";


const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar />
      <Spin spinning={loading}>
        <div className="home__main">
            <Game />
        </div>
      </Spin>
    </div>
  );
};

export default Home;
