import { combineReducers } from 'redux';

import sessionsErrorsReducer from './session_errors';
import collectionsErrorsReducer from './collections_errors';

export default combineReducers({
  session: sessionsErrorsReducer,
  collections: collectionsErrorsReducer,
});
