import { combineReducers } from "redux";
import feedsReducer from "./feedsReducer";

const myReducers = combineReducers({
  feeds: feedsReducer,
});

export default myReducers;
