import { connect } from 'react-redux';
import { getOneGame } from '../../actions/games';
import { withRouter } from 'react-router-dom';
import GameShow from './game_show';


const mapStateToProps = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.gameId],
});


const mapDispatchToProps = dispatch => ({
  getOneGame: gameId => dispatch(getOneGame(gameId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameShow));
