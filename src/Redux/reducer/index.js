import { combineReducers, createStore } from "redux";
import { userReducer } from "./userReducer";

const allReducers = combineReducers({
  user: userReducer
});

export const store = createStore(allReducers)