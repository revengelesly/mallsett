import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRoutes from './router';
import jwt from "jsonwebtoken";
import { setCurrentUser } from "./store/actions/authActions"
import setAuthorizationToken from "./auth"
if (localStorage.jwToken) {
  setAuthorizationToken(localStorage.jwtToken);
  console.log(jwt.decode(localStorage.jwToken))
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwToken)))
}

const DashApp = () => (
  <Provider store={store}>
    <PublicRoutes history={history} />
  </Provider>
);

export default DashApp;
