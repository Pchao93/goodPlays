import { postUser, deleteSession, postSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const CLOSE_SESSION_FORM = 'CLOSE_SESSION_FORM';
export const OPEN_SESSION_FORM = 'OPEN_SESSION_FORM';

const receiveCurrentUser = jsonObj => ({
  type: RECEIVE_CURRENT_USER,
  user: jsonObj.users,
  reviews: jsonObj.reviews,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const openSessionForm = () => ({
  type: OPEN_SESSION_FORM,
});

export const closeSessionForm = () => ({
  type: CLOSE_SESSION_FORM,
});

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(jsonObj => {
    console.log(jsonObj);
    dispatch(receiveCurrentUser(jsonObj));
    dispatch(closeSessionForm());
  }, errors => dispatch(receiveSessionErrors(errors)));

export const login = formUser => dispatch => postSession(formUser)
  .then(jsonObj => {
    console.log(jsonObj);
    dispatch(receiveCurrentUser(jsonObj));
    dispatch(closeSessionForm());
  }, errors => dispatch(receiveSessionErrors(errors)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
