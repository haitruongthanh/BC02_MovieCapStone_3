import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { seatReducer } from "./seatReduser";

export const rootReducer = combineReducers({ userReducer, seatReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
