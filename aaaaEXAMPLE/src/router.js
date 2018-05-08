import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import App from './containers/App/App';
import Signin from "./containers/Page/signin";
import Signup from "./containers/Page/signup";
// import asyncComponent from './helpers/AsyncFunc';
import Homepage from "./containers/homePage"


const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/'}
          component={Homepage}
        />
        <Route
          exact
          path={'/signin'}
          component={Signin}
        />
        <Route
          exact
          path={'/register'}
          component={Signup}
        />
        <Route
          path="/dashboard"
          component={App}
        />
        <Route
          path="/homePage"
          component={App}
        />
      </div>
    </ConnectedRouter>
  );
};
export default PublicRoutes;
