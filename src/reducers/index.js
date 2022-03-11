import { combineReducers } from "redux";
import { categoryReducer } from "./categories";

export default combineReducers({
  categories: categoryReducer,
});
