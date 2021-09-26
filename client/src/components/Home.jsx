import React, { useEffect } from "react";
import "../styles/Home.scss";
import { Spin } from "antd";

import Navbar from "./Navbar";
import StartButton from "./StartButton";
import Game from "./Game";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/auth";

import { isStarted } from "../utils/conditions";

const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const isStartedStore = useSelector((state) => state.auth.isStarted);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, isStartedStore]);

  return (
    <div className="home">
      <Navbar />
      <Spin spinning={loading}>
        <div className="home__main">
          {isStarted() ? (
            <Game />
          ) : (
            <StartButton />
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Home;
