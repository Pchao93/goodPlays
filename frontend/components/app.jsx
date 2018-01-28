import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import { logout } from '../actions/session';
import NavBarContainer from './navigation/nav_bar_container';
export default () => (
  <div>
    <NavBarContainer />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />

  </div>
);
