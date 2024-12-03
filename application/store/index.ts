import { legacy_createStore as createStore, combineReducers } from "redux";
import myReducers from "./reducers";

// If you have multiple reducers, use combineReducers, otherwise directly use your reducer
const rootReducer = combineReducers({
  myReducers,
});

// Create store with the rootReducer and middleware
const store = createStore(rootReducer);

export default store;
