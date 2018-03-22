import {
  REMOVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_ONE_REVIEW,
} from '../actions/reviews';
import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from '../actions/session';
import {
  RECEIVE_ONE_GAME,
  RECEIVE_GAMES,
} from '../actions/games';
import {
  RECEIVE_COLLECTIONS,
  RECEIVE_ONE_COLLECTION,
  REMOVE_GAME_COLLECTION,
} from '../actions/collections';


import {merge} from 'lodash';

export default (state = {}, action) => {
  let newState;
  let review;
  let index;
  switch(action.type) {
    case RECEIVE_ONE_REVIEW:
      newState = merge({}, state);
      newState[action.review.id] = action.review;
      return newState;
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.reviews);
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    case RECEIVE_ONE_GAME:
      return merge({}, state, action.reviews);
    case RECEIVE_GAMES:
      return merge({}, state, action.reviews);
    case RECEIVE_COLLECTIONS:
      return merge({}, state, action.reviews);
    case RECEIVE_ONE_COLLECTION:
      return merge({}, state, action.reviews);
    case REMOVE_GAME_COLLECTION:
      newState = merge({}, state);
      delete newState[action.removeReviewId];
      return newState;
    // case LOGOUT_CURRENT_USER:
    //   return {};
    default:
      return state;
  }
};
