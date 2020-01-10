import { endPoint, config } from "../../../config";
import md5 from "md5";
import axios from "axios";
import {
  CHECK_USER_AUTH_STATE,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from "../../Types";
import { getUser, destroyUser } from "../user/user";

// CHECK USERS AUTH STATE
export const checkUsersAuthState = () => async dispatch => {
  try {
    const res = await axios.get(`${endPoint}/api/current_user`);
    if (res.data.user) {
      dispatch(getUser(res.data.user));
      dispatch({
        type: CHECK_USER_AUTH_STATE,
        payload: { authState: true }
      });
    } else {
      dispatch({
        type: CHECK_USER_AUTH_STATE,
        payload: { authState: false }
      });
    }
  } catch (err) {
    console.error(err.message);
  }
};

// REGISTER FUNCTION
export const registerUser = (
  body,
  setLoading,
  setError,
  setEmailError,
  history
) => async dispatch => {
  body.image = `https://gravatar.com/avatar/${md5(body.email)}?d=identicon`;
  try {
    const res = await axios.post(`${endPoint}/api/register`, body, config);
    if (res.data.msg === "registered") {
      setEmailError(true);
      setError("This Email Already Taken");
    } else {
      dispatch({
        type: REGISTER_USER
      });
    }
    setLoading(false);
    history.push("/login");
  } catch (err) {
    console.error(err.message);
    setLoading(false);
  }
};

// LOGIN FUNCTION
export const loginUser = (
  body,
  setLoading,
  setError,
  setEmailError,
  setPasswordError
) => async dispatch => {
  try {
    const res = await axios.post(`${endPoint}/api/login`, body, config);
    
    if (res.data.msg === "No User") {
      setEmailError(true);
      setError("No User Found on This Email");
    } else if (res.data.msg === "Password Invalid") {
      setPasswordError(true);
      setError("Password is Invalid Please Check And Enter Valid Password");
    }
    dispatch(getUser(res.data.user))
    dispatch({
      type: LOGIN_USER
    });
    setLoading(false);
  } catch (err) {
    console.error(err.message);
    setLoading(false);
  }
};

// LOGOUT USER
export const logOutUser = () => async dispatch => {
  try {
    await axios.get(`${endPoint}/api/logout`);
    dispatch(destroyUser());
    dispatch({
      type: LOGOUT_USER
    });
  } catch (err) {
    console.error(err.message);
  }
};
