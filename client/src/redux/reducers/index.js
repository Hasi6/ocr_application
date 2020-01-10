import { combineReducers } from "redux";

import auth from "./auth/auth";
import user from "./user/user";

const rootReducer = combineReducers({
  auth,
  user
});

export default rootReducer;
