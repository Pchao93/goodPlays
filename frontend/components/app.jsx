import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import { logout } from '../actions/session';
import NavBarContainer from './navigation/nav_bar_container';
export default () => (
  <div>
    <Route exact path="/" render={() => (
          <Redirect to="/directory" />
    )}/>


    <NavBarContainer />


  </div>
);
