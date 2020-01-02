import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";
import auth from "./auth/auth";
import user from "./user/user";

const rootReducer = combineReducers({
  async: asyncAction,
  auth,
  user
});

export default rootReducer;
