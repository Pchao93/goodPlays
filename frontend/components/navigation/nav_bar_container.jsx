import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import { searchGames } from '../../actions/search';
import NavBar from './nav_bar';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  console.log(searchGames);
  return {
    logout: () => dispatch(logout()),
    searchGames: query => dispatch(searchGames(query)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
