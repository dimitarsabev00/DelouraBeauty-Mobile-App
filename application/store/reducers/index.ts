import { combineReducers } from "redux";
import feedsReducer from "./feedsReducer";
import cartReducer from "./cartReducer";

const myReducers = combineReducers({
  feeds: feedsReducer,
  cartItems: cartReducer,
});

export default myReducers;