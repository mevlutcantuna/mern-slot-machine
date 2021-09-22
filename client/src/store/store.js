import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
