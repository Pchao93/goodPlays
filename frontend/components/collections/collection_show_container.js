import { connect } from 'react-redux';
import {
  getAllGames,
  getOneCollection,
  deleteCollection,
  updateCollection,
} from '../../actions/collections';
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
    collection,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: () => dispatch(getOneCollection(ownProps.match.params.collectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
