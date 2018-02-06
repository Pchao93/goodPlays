import {
  REMOVE_COLLECTION,
  RECEIVE_COLLECTIONS,
  RECEIVE_ONE_COLLECTION,
} from '../actions/collections';
import {
  RECEIVE_ONE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW
} from '../actions/reviews';
import {
  RECEIVE_ONE_GAME,
} from '../actions/games';

import {merge} from 'lodash';

export default (state = {}, action) => {
  let newState;
  let user;
  let index;
  switch(action.type) {
    case RECEIVE_ONE_GAME:
      return merge({}, state, action.users);
    case RECEIVE_ONE_COLLECTION:
      newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_COLLECTIONS:
      return merge({}, state, action.users);
    case REMOVE_COLLECTION:
      newState = merge({}, state);
      user = newState[action.collection.user_id];
      index = user.collections.indexOf(action.collection.id);
      user.collections = user.collections.splice(index, 1);
      return newState;
    case RECEIVE_ONE_REVIEW:
      newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_REVIEWS:
      return merge({}, state, action.users);
    case REMOVE_REVIEW:
      newState = merge({}, state);
      user = newState[action.review.user_id];
      index = user.reviews.indexOf(action.review.id);
      user.reviews = user.reviews.splice(index, 1);
      return newState;
    default:
      return state;
  }

};
