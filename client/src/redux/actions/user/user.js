import { config } from "../../../config";
import { GET_USER, DESTROY_USER } from "../../Types";

// GET USER
export const getUser = user => dispatch => {
  dispatch({
    type: GET_USER,
    payload: { user }
  });
};

// DESTROY USER
export const destroyUser = () => dispatch => {
  dispatch({
    type: DESTROY_USER
  });
};
