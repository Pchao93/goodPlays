import  {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  CLOSE_SESSION_FORM,
  OPEN_SESSION_FORM,
} from '../actions/session';
import {merge} from 'lodash';

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case OPEN_SESSION_FORM:
      return merge({}, state, {forms: true});
    case CLOSE_SESSION_FORM:
      return merge({}, state, {forms: false});
    default:
      return state;
  }
};
