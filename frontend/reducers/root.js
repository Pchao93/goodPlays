import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import errorsReducer from './errors';
import sessionReducer from './session';
import searchReducer from './search';


export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  search: searchReducer,
});
