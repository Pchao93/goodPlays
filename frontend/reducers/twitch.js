import { RECEIVE_STREAMS } from '../actions/twitch';
import {merge} from 'lodash';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_STREAMS:
      newState = merge({}, state);
      action.streams.forEach(stream => {
        newState[stream._id] = stream;
      });
      return newState;
    default:
      return state;
  }
};
