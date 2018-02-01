import { connect } from 'react-redux';
import {
  getAllGames,
  deleteCollection,
  updateCollection,
} from '../../actions/games';
import GameIndex from '../games/game_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let collection = state.entities.collections[ownProps.match.params.collectionId];
  let games = [];
  if (collection) {
    games = collection.games.map(gameIndex => {
      return state.entities.games[gameIndex];
    });
  } else {
    collection = {name: ""};
  }
  return {
    headerText: collection.name,
    games,
  };
};

const mapDispatchToProps = dispatch => ({
  getAllGames: () => dispatch(getAllGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
