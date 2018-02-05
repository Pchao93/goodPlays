import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import { logout } from '../actions/session';
import NavBarContainer from './navigation/nav_bar_container';
import SideBarContainer from './side_bar/side_bar_container';
import GameShowContainer from './games/game_show_container';
import GameIndexContainer from './games/game_index_container';
import CollectionShowContainer from './collections/collection_show_container.jsx';
import NotFound from './not_found';



export default (props) => (
  <div className='app-container'>
    <Route exact path="/" render={() => (
          <Redirect to="/directory" />
    )}/>


    <NavBarContainer />
    <SideBarContainer />
    <Switch>
      <Route exact path='/directory' component={GameIndexContainer} />
      <Route exact path='/directory/login' component={GameIndexContainer} />
      <Route exact path='/directory/signup' component={GameIndexContainer} />

      <Route exact path="/games/:gameId" component={GameShowContainer}/>
      <Route exact path="/games/:gameId/login" component={GameShowContainer}/>
      <Route exact path="/games/:gameId/signup" component={GameShowContainer}/>

      <ProtectedRoute exact path='/collections/all' component={CollectionShowContainer}/>
      <Route exact path="/collections/:collectionId" component={CollectionShowContainer}/>
      <Route exact path="/collections/:collectionId/edit" component={CollectionShowContainer}/>

      <Route exact path="/collections/:collectionId/login" component={CollectionShowContainer}/>
      <Route exact path="/collections/:collectionId/signup" component={CollectionShowContainer}/>


      <Route path="*" component={NotFound}/>

    </Switch>

  </div>
);
