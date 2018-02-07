import { combineReducers } from 'redux';

import gamesReducer from './games';
import collectionsReducer from './collections';
import usersReducer from './users';
import reviewsReducer from './reviews';
import twitchReducer from './twitch';

export default combineReducers({

  games: gamesReducer,
  collections: collectionsReducer,
  users: usersReducer,
  reviews: reviewsReducer,
  streams: twitchReducer,
});
