import  {
  RECEIVE_GAMES,
  RECEIVE_ONE_GAME
} from '../actions/games';
import {
  RECEIVE_ONE_COLLECTION,
  RECEIVE_COLLECTIONS
} from '../actions/collections';
import { merge } from 'lodash';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_ONE_GAME:
      newState = merge({}, state);

      newState[action.game.id] = action.game;

      return newState;
    case RECEIVE_GAMES:
      return action.games;

    case RECEIVE_ONE_COLLECTION:
      return action.games;

    case RECEIVE_COLLECTIONS:
      return action.games;
    default:
      return state;
  }
};
