import { createReducer } from "../util/reducerUtil";
import { GET_USER, EDIT_USER, DESTROY_USER } from "../../Types";

const initialState = null;

//GET USER
const getUser = (state, payload) => {
  return payload.user;
};

// EDIT USER
const editUser = (state, payload) => {
  return payload.user;
};

// DESTROY USER
const destroyUser = state => {
  return null;
};

export default createReducer(initialState, {
  [GET_USER]: getUser,
  [EDIT_USER]: editUser,
  [DESTROY_USER]: destroyUser
});
