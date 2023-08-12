import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";
import { questionReducer } from "./questionReducer";
import { allUserReducer } from "./allUserReducer";
import { createLogger } from 'redux-logger'

const middleware = [thunk, createLogger()];

const allReducers = combineReducers({
  user: userReducer,
  questions: questionReducer,
  users: allUserReducer
});

export const store = createStore(allReducers, applyMiddleware(...middleware))