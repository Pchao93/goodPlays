import { RECEIVE_SEARCH_RESULTS } from '../actions/search';
import {merge} from 'lodash';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      if (action.games) {
        return action.games;
      } else {
        return {};
      }
    default:
      return state;
  }
};
