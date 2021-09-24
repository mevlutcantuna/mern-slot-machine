import { AUTH } from "../constants/auth";

const initialState = {
  user: null,
  loading: false,
  error: "",
  isLoggedIn: false,
  isStarted: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
        isLoggedIn: false,
      };
    case AUTH.SIGNUP_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
        isLoggedIn: false,
      };
    case AUTH.SIGNUP_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
        isLoggedIn: true,
      };
    case AUTH.LOGIN_LOADING:
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
        isLoggedIn: false,
      };
    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case AUTH.LOGOUT_SUCCESS:
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("isStarted");
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
        isLoggedIn: false,
      };
    case AUTH.GET_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
        isLoggedIn: true,
      };
    case AUTH.GET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isLoggedIn: false,
      };
    case AUTH.GET_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case AUTH.UPDATE_COIN_SUCCESS:
      return {
        ...state,
        user: { ...state.user, coins: action.payload.coins },
        loading: false,
        error: "",
        isLoggedIn: true,
        isStarted: true,
      };
    case AUTH.UPDATE_COIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        isLoggedIn: false,
      };
    case AUTH.UPDATE_COIN_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isStarted: false,
      };
    case AUTH.RESET:
      return {
        ...state,
        user: null,
        loading: false,
        error: "",
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
