import authReducer from "./auth";
import { combineReducers } from "redux";

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
