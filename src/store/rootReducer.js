import { combineReducers } from "redux";
import comments from "./comments/reducer";
import posts from "./posts/reducer";
export default combineReducers({
  comments,
  posts,
});
