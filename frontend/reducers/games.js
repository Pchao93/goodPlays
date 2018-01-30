import  {
  RECEIVE_GAMES,
  RECEIVE_ONE_GAME
} from '../actions/games';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ONE_GAME:
      newState = merge({}, state);

      newState[action.game.id] = action.game;
      
      return newState;
    case RECEIVE_GAMES:
      return action.games;
    default:
      return state;
  }
};
