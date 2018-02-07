import { combineReducers } from 'redux';

import searchGamesReducer from './search_games';
import searchReviewsReducer from './search_reviews';
import queryReducer from './query';

export default combineReducers({
  games: searchGamesReducer,
  reviews: searchReviewsReducer,
  query: queryReducer,
});
