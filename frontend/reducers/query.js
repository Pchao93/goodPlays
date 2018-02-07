import { RECEIVE_SEARCH_RESULTS } from '../actions/search';
import {merge} from 'lodash';

export default (state = null, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.query;
    default:
      return state;
  }
};
