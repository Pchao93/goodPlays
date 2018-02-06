import { connect } from 'react-redux';
import { getAllGames } from '../../actions/games';
import { withRouter } from 'react-router-dom';
import GameIndex from './game_index';


const mapStateToProps = (state, ownProps) => {

  let games = [];
  let reviews = [];
  if (state.entities.games) {
    games = Object.values(state.entities.games);
  }

  if (state.entities.reviews) {
    reviews = Object.values(state.entities.reviews);
  }
  return {
    games,
    headerText: "Top Games",
    reviews
  };
};


const mapDispatchToProps = dispatch => ({
  action: () => dispatch(getAllGames()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
