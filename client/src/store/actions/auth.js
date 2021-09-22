import { instance } from "../../utils/api";
import { AUTH } from "../constants/auth";
import { errorMessage,successMessage } from "../../utils/notifications";

export const signup = (signupForm) => async (dispatch) => {
    dispatch({type:AUTH.SIGNUP_LOADING})
    
    try {
    const response = await instance.post("/auth/signup", signupForm);
    dispatch({ type: AUTH.SIGNUP_SUCCESS, payload: response.data });
    return successMessage("Signed Up Successfully...")

  } catch (err) {
    dispatch({ type: AUTH.SIGNUP_ERROR, payload: err.response.data.errorMessage });
    return errorMessage(err.response.data.errorMessage)
  }
};
