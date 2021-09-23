import { instance } from "../../utils/api";
import { AUTH } from "../constants/auth";
import { errorMessage, successMessage } from "../../utils/notifications";
import axios from "axios";

export const signup = (signupForm) => async (dispatch) => {
  dispatch({ type: AUTH.SIGNUP_LOADING });

  try {
    const response = await instance.post("/auth/signup", signupForm);
    dispatch({ type: AUTH.SIGNUP_SUCCESS, payload: response.data });
    return successMessage("Signed Up Successfully...");
  } catch (err) {
    dispatch({
      type: AUTH.SIGNUP_ERROR,
      payload: err.response.data.errorMessage,
    });
    return errorMessage(err.response.data.errorMessage);
  }
};

export const login = (loginForm) => async (dispatch) => {
  dispatch({ type: AUTH.LOGIN_LOADING });

  try {
    const response = await instance.post("/auth/login", loginForm);
    dispatch({ type: AUTH.LOGIN_SUCCESS, payload: response.data.user });
    localStorage.setItem("accessToken", response.data.user.accessToken);
    return successMessage("Logged In Succefully...");
  } catch (err) {
    dispatch({
      type: AUTH.LOGIN_ERROR,
      payload: err.response.data.errorMessage,
    });
    return errorMessage(err.response.data.errorMessage);
  }
};

export const getUser = () => async (dispatch) => {
  // get token from local storage
  const accessToken = localStorage.getItem("accessToken");
  dispatch({type:AUTH.GET_LOADING})

  try {
    // here used axios because of using barear token..
    const response = await axios.get("http://localhost:5000/api/auth/get-user",{
      headers:{'Authorization': `Barear ${accessToken}`}
    });
    dispatch({ type: AUTH.GET_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: AUTH.GET_ERROR, payload: err.response.data.errorMessage });
    errorMessage(err.response.data.errorMessage);
  }
};