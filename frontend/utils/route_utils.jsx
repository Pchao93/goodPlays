import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  redirectPath: ownProps.location.pathname
});

const Auth = ({ loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) => (
      loggedIn ? <Redirect to="/"/> : <Component {...props} />
    )}
  />
);

const Protected = ({ redirectPath, loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={(props) => (
      loggedIn ? <Component {...props} /> : <Redirect to={`${redirectPath}/login`} />
    )}
  />
);

const Bool = ({ bool, path, component: Component, redirectPath}) => (
  <Route
    path={path}
    render={(props) => (
      bool ? <Component {...props} /> : <Redirect to={redirectPath} />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const BoolRoute = withRouter(connect()(Bool));
