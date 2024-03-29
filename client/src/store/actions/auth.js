import { instance } from "../../utils/api";
import { AUTH } from "../constants/auth";
import { errorMessage, successMessage } from "../../utils/notifications";
import axios from "axios";

export const signup = (signupForm) => async (dispatch) => {
  dispatch({ type: AUTH.SIGNUP_LOADING });

  try {
    const response = await instance.post("/auth/signup", signupForm);
    console.log(response);
    dispatch({ type: AUTH.SIGNUP_SUCCESS, payload: response?.data });
    console.log(response)
    return successMessage("Signed Up Successfully...");
  } catch (err) {
    dispatch({
      type: AUTH.SIGNUP_ERROR,
      payload: err.response?.data?.errorMessage,
    });
    return errorMessage(err.response?.data.errorMessage);
  }
};

export const login = (loginForm) => async (dispatch) => {
  dispatch({ type: AUTH.LOGIN_LOADING });

  try {
    const response = await instance.post("/auth/login", loginForm);
    dispatch({ type: AUTH.LOGIN_SUCCESS, payload: response.data.user });
    sessionStorage.setItem("accessToken", response.data.user.accessToken);
    return successMessage("Logged In Succefully...");
  } catch (err) {
    dispatch({
      type: AUTH.LOGIN_ERROR,
      payload: err.response?.data?.errorMessage,
    });
    return errorMessage(err.response?.data?.errorMessage);
  }
};

export const getUser = () => async (dispatch) => {
  // get token from local storage
  const accessToken = sessionStorage.getItem("accessToken");
  dispatch({ type: AUTH.GET_LOADING });
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/': 'https://mern-slot-machine.vercel.app/'
  try {
    // here used axios because of using bearer token..
    const response = await axios.get(
      url + "api/auth/get-user",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    dispatch({ type: AUTH.GET_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: AUTH.GET_ERROR, payload: err.response.data.errorMessage });
    errorMessage(err.response.data.errorMessage);
  }
};

export const incOrDescCoin =
  (coinValue, id, successCoin, gameStart) => async (dispatch) => {
    dispatch({ type: AUTH.UPDATE_COIN_LOADING });

    try {
      const response = await instance.patch("/auth/inc-desc-coin", {
        coinValue,
        id,
      });
      dispatch({ type: AUTH.UPDATE_COIN_SUCCESS, payload: response.data });
      sessionStorage.setItem("isStarted", JSON.stringify(true));
      if (successCoin && !gameStart)
        return successMessage(`You Win ${successCoin} Coins...`);
    } catch (err) {
      dispatch({
        type: AUTH.UPDATE_COIN_ERROR,
        payload: err.response.data.errorMessage,
      });
      errorMessage(err.response.data.errorMessage);
    }
  };
