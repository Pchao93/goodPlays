import { connect } from 'react-redux';
import { logout, openSessionForm, closeSessionForm } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import { searchGames } from '../../actions/search';
import NavBar from './nav_bar';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  forms: state.session.forms,

});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    searchGames: query => dispatch(searchGames(query)),
    closeSessionForm: () => dispatch(closeSessionForm()),
    openSessionForm: () => dispatch(openSessionForm()),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
