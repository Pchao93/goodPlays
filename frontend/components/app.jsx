import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import { logout } from '../actions/session';
import NavBarContainer from './navigation/nav_bar_container';
import SideBarContainer from './side_bar/side_bar_container';
import GameShowContainer from './games/game_show_container';
import GameIndexContainer from './games/game_index_container';
import CollectionShowContainer from './collections/collection_show_container.jsx';
import SearchContainer from './search/search_container';
import SplashPageContainer from './splash/splash_page_container';
import UserProfileContainer from './users/user_profile_container';
import NotFound from './not_found';



export default (props) => (
  <div className='app-container'>
    <NavBarContainer />
    <SideBarContainer/>
    <Switch>
      <AuthRoute exact path='/' component={SplashPageContainer} />
      <Route exact path='/directory' component={GameIndexContainer} />

      <Route exact path='/directory/search' component={SearchContainer} />
      <Route path='/directory/search/:searchQuery' component={SearchContainer} />

      <Route exact path="/games/:gameId" component={GameShowContainer}/>
      <ProtectedRoute exact path='/collections/my-games' component={CollectionShowContainer}/>
      <Route exact path="/collections/:collectionId" component={CollectionShowContainer}/>
      <Route exact path="/collections/:collectionId/edit" component={CollectionShowContainer}/>
      <Route exact path="/users/:userId" component={UserProfileContainer}/>
      <Route path="*" component={NotFound}/>

    </Switch>



  </div>
);
