import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
// import reducers from './reducer'


export default combineReducers({
  postsReducer,
  usersReducer
  // reducers
});