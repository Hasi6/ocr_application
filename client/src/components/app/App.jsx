import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/configureStore";
import HomePage from "./HomePage/HomePage";

// sementic ui
import "semantic-ui-css/semantic.min.css";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import { checkUsersAuthState } from "../../redux/actions/auth/auth";
import Verify from "./Auth/Register/verify";

// REDUX STAFF
const store = configureStore;

// CHECK USER LOGGED IN OR NOT
store.dispatch(checkUsersAuthState())


const App = ({location}) => {
  return (
    <Provider store={store}>
    <Switch key={location.key}>
    <Route path="/" component={HomePage} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/register" component={Register} exact />
    <Route path="/verify/:id" component={Verify} exact />
  </Switch>
    </Provider>
  );
};

export default withRouter(App);
