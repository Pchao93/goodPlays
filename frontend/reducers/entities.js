import { combineReducers } from 'redux';

import gamesReducer from './games';
import collectionsReducer from './collections';
import usersReducer from './users';
import reviewsReducer from './reviews';

export default combineReducers({

  games: gamesReducer,
  collections: collectionsReducer,
  users: usersReducer,
  reviews: reviewsReducer,
});
