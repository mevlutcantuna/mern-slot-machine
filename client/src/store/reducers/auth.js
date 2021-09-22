import { AUTH } from "../constants/auth";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case AUTH.SIGNUP_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };
    case AUTH.SIGNUP_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case AUTH.LOGIN_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };
    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case AUTH.LOGOUT_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };
    case AUTH.LOGOUT_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    case AUTH.RESET:
      return {
        ...state,
        user: null,
        loading: false,
        error: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
