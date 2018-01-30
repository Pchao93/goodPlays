import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import { logout } from '../actions/session';
import NavBarContainer from './navigation/nav_bar_container';
import SideBarContainer from './side_bar/side_bar_container';
import GameShowContainer from './games/game_show_container';
import GameIndexContainer from './games/game_index_container';




export default (props) => (
  <div className='app-container'>
    <Route exact path="/" render={() => (
          <Redirect to="/directory" />
    )}/>


    <NavBarContainer />
    <SideBarContainer />
    <Switch>
      <Route path='/directory' component={GameIndexContainer} />
      <Route path="/games/:gameId" component={GameShowContainer}/>

    </Switch>

  </div>
);
