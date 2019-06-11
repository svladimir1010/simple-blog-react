import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import commentsReducer from './commentsReducer';

export default combineReducers({
  postsReducer,
  usersReducer,
  commentsReducer
});
