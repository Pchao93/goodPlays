import {
  REMOVE_COLLECTION,
  RECEIVE_COLLECTIONS,
  RECEIVE_ONE_COLLECTION,
  ADD_GAME_COLLECTION,
  REMOVE_GAME_COLLECTION,
} from '../actions/collections';
import {RECEIVE_ONE_REVIEW} from '../actions/reviews';
import  {
  LOGOUT_CURRENT_USER,
} from '../actions/session';
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
      newState[action.collectionId].count += 1;

      if (action.addGameToCollectionId) {

        if (!newState[action.addGameToCollectionId].games.includes(action.gameId)) {
          newState[action.addGameToCollectionId].games.push(action.gameId);
          newState[action.addGameToCollectionId].count += 1;
        }

      } else if (action.removeGameFromCollectionId) {
        collection = newState[action.removeGameFromCollectionId];
        index = collection.games.indexOf(action.gameId);
        collection.games.splice(index, 1);
        collection.count += 1;
      }
      return newState;
    case REMOVE_GAME_COLLECTION:
      newState = merge({}, state);
      collection = newState[action.collectionId];
      index = collection.games.indexOf(action.gameId);
      collection.games.splice(index, 1);
      if (action.removeGamesFromCollectionArray.length > 0) {
        action.removeGamesFromCollectionArray.forEach(collectionId => {
          let otherIndex = newState[collectionId].games.indexOf(action.gameId);
          newState[collectionId].games.splice(otherIndex, 1);
          collection.count -= 1;
        });
      }
      collection.count -= 1;

      return newState;
    case RECEIVE_ONE_REVIEW:
      newState = merge({}, state);
      if (newState[action.addGameToCollectionId] && !newState[action.addGameToCollectionId].games.includes(action.gameId)) {
        newState[action.addGameToCollectionId].games.push(action.gameId);
        newState[action.addGameToCollectionId].count += 1;
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return state;
      // return {};
    default:
      return state;
  }

};
