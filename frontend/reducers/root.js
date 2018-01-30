import { combineReducers } from 'redux';
import sessionReducer from './session';
import gamesReducer from './games';
import errorsReducer from './errors';

export default combineReducers({
  session: sessionReducer,
  games: gamesReducer,
  errors: errorsReducer
});
