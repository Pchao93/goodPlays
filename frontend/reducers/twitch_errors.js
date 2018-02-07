import {
  RECEIVE_STREAM_ERRORS,
  CLEAR_STREAM_ERRORS,
} from '../actions/twitch';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_STREAM_ERRORS:
      return action.errors.responseText;
    case CLEAR_STREAM_ERRORS:
      return [];
    default:
      return state;
  }
};
