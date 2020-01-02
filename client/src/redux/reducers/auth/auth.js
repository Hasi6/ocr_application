import { createReducer } from "../util/reducerUtil";
import {
  CHECK_USER_AUTH_STATE,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from "../../Types";

const initialState = null;

//CHECK USER AUTH STATE
const checkUserAuthState = (state, payload) => {
  return payload.authState;
};

// LOGIN USER
const loginUser = state => {
  return true;
};

// REGISTER USER
const registerUser = state => {
  return state;
};

// LOGOUT USER
const logOutUser = state => {
  return false;
};

export default createReducer(initialState, {
  [CHECK_USER_AUTH_STATE]: checkUserAuthState,
  [LOGIN_USER]: loginUser,
  [REGISTER_USER]: registerUser,
  [LOGOUT_USER]: logOutUser
});
