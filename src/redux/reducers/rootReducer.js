import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { seatReducer } from "./seatReduser";
import { spinnerReducer } from "./spinnerReducer";

export const rootReducer = combineReducers({
  userReducer,
  seatReducer,
  spinnerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
