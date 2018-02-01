import { connect } from 'react-redux';
import { getAllGames } from '../../actions/games';
import { withRouter } from 'react-router-dom';
import GameIndex from './game_index';


const mapStateToProps = (state, ownProps) => ({
  games: Object.values(state.entities.games),
  headerText: "Top Games"
});


const mapDispatchToProps = dispatch => ({
  action: () => dispatch(getAllGames()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
