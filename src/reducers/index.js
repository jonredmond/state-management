import { createStore, combineReducers } from "redux";

import counterReducer from "./counter";
import listReducer from "./list";

const store = createStore(
  combineReducers({ counter: counterReducer, list: listReducer })
);

export default store;
