import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openSessionForm, login} from '../../actions/session';


import { getAllGames } from '../../actions/games';
import SplashPage from './splash_page';


const mapStateToProps = state => ({
  games: Object.values(state.entities.games),

});

const mapDispatchToProps = dispatch => ({
  openSessionForm: () => dispatch(openSessionForm()),
  getAllGames: () => dispatch(getAllGames()),
  login: (formUser) => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
