import {
  REMOVE_COLLECTION,
  RECEIVE_COLLECTIONS,
  RECEIVE_ONE_COLLECTION,
  ADD_GAME_COLLECTION,
  REMOVE_GAME_COLLECTION,
} from '../actions/collections';
import {merge} from 'lodash';

export default (state = {}, action) => {
  let newState;
  let collection;
  let index;
  switch(action.type) {
    case RECEIVE_ONE_COLLECTION:
      newState = merge({}, state);
      newState[action.collection.id] = action.collection;
      return newState;
    case RECEIVE_COLLECTIONS:
      return merge({}, state, action.collections);
    case REMOVE_COLLECTION:
      newState = merge({}, state);
      delete newState[action.collection.id];
      return newState;
    case ADD_GAME_COLLECTION:
      newState = merge({}, state);
      newState[action.collectionId].games.push(action.gameId);
      return newState;
    case REMOVE_GAME_COLLECTION:
      newState = merge({}, state);
      collection = newState[action.collectionId];
      index = collection.games.indexOf(action.gameId);
      collection.games.splice(index, 1);
      return newState;
    default:
      return state;
  }

};
