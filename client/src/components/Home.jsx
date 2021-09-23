import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import { Spin } from "antd";

import Navbar from "./Navbar";
import StartButton from "./StartButton";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/auth";

import { isStarted } from "../utils/conditions";

const Home = () => {
  const dispatch = useDispatch();
  const [isStardtedState, setIsStartedState] = useState(false);

  const loading = useSelector((state) => state.auth.loading);
  const isStartedStore = useSelector((state) => state.auth.isStarted);

  useEffect(() => {
    dispatch(getUser());
    (isStarted() || isStartedStore) && setIsStartedState(true)
  }, [dispatch,isStartedStore]);

  return (
    <div className="home">
      <Navbar />
      <Spin spinning={loading}>
        <div className="home__main">
          {isStardtedState ? (
            <div>dsada</div>
          ) : (
            <StartButton setIsStartedState={setIsStartedState} />
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Home;
