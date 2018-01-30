import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import { logout } from '../actions/session';
import NavBarContainer from './navigation/nav_bar_container';
import SideBarContainer from './side_bar/side_bar_container';
import GameShowContainer from './games/game_show_container';



export default () => (
  <div className='app-container'>
    <Route exact path="/" render={() => (
          <Redirect to="/directory" />
    )}/>


    <NavBarContainer />
    <SideBarContainer />
    <Route path="/games/:gameId" component={GameShowContainer}/>
    


  </div>
);
