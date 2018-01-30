import { combineReducers } from 'redux';
import sessionReducer from './session';
import gamesReducer from './games';

export default combineReducers({
  session: sessionReducer,
  games: gamesReducer,
});
