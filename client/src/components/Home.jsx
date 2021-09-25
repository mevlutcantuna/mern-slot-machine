import React, { useEffect, useState } from "react";
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
  const [isStartedState, setIsStartedState] = useState(false);

  const loading = useSelector((state) => state.auth.loading);
  const isStartedStore = useSelector((state) => state.auth.isStarted);

  useEffect(() => {
    dispatch(getUser());
    // if user starts once, and page refresh,user don't have to start again
    isStarted() && isStartedStore && setIsStartedState(true);
  }, [dispatch, isStartedStore]);

  return (
    <div className="home">
      <Navbar />
      <Spin spinning={loading}>
        <div className="home__main">
          {isStartedState ? (
            <Game />
          ) : (
            <StartButton setIsStartedState={setIsStartedState} />
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Home;
