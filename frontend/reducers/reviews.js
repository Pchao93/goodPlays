import {
  REMOVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_ONE_REVIEW,
} from '../actions/reviews';
import  {
  LOGOUT_CURRENT_USER,
} from '../actions/session';

import {merge} from 'lodash';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_ONE_REVIEW:
      newState = merge({}, state);
      newState[action.review.id] = action.review;
      return newState;
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};
