import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../store/actions/auth";

import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      home Page sd
    </div>
  );
};

export default Home;
