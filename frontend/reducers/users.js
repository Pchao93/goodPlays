import {
  REMOVE_COLLECTION,
  RECEIVE_COLLECTIONS,
  RECEIVE_ONE_COLLECTION,
} from '../actions/collections';
import {merge} from 'lodash';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_ONE_COLLECTION:
      newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_COLLECTIONS:
      return merge({}, state, action.users);
    case REMOVE_COLLECTION:
      newState = merge({}, state);
      console.log(newState);
      console.log(state);
      let user = newState[action.collection.user_id];
      let index = user.collections.indexOf(action.collection.id);
      user.collections = user.collections.splice(index, 1);
      return newState;
    default:
      return state;
  }

};
