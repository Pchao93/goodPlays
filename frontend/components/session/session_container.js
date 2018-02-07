import { connect } from 'react-redux';
import { login, createNewUser, clearSessionErrors } from '../../actions/session';
import Session from './session';

const mapStateToProps = (state, ownProps) => {
  let errors = state.errors.session;
  let type = 'signup';
  if (ownProps.sessionAction === 'login') {
    type = 'login';
  }
  return ({
    type,
    errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;


  return ({
    action,
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: formUser => (dispatch(login(formUser))),
    signup: formUser => dispatch(createNewUser(formUser)),   

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
