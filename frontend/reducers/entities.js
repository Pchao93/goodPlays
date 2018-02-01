import { combineReducers } from 'redux';

import gamesReducer from './games';
import collectionsReducer from './collections';

export default combineReducers({

  games: gamesReducer,
  collections: collectionsReducer,
});
