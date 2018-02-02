import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';
import {
  getAllGames,
  getOneCollection,
  destroyCollection,
  updateCollection,
} from '../../actions/collections';
import GameIndex from '../games/game_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let collection = state.entities.collections[ownProps.match.params.collectionId];
  let currentUser = state.session.currentUser;
  let games = [];
  let headerText;
  let collectionUser;
  let edit = false;
  if (collection) {
    if (ownProps.match.path === '/collections/:collectionId/edit' &&
      collection.user_id === currentUser.id ) {
        edit = true;
    }
    games = collection.games.map(gameIndex => {
      return state.entities.games[gameIndex];
    }).sort((a, b) => a.id - b.id);
    if (currentUser && collection.user_id === currentUser.id) {
      collectionUser = {username: "My Games", id: currentUser.id};
    } else {
      collectionUser = state.entities.users[collection.user_id];
    }
  } else {
    collection = {name: ""};
  }



  return {
    headerText: collection.name,
    games,
    collection,
    collectionUser,
    currentUser,
    edit,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: () => dispatch(getOneCollection(ownProps.match.params.collectionId)),
  destroyCollection: (collectionId) => dispatch(destroyCollection(collectionId)),
  updateCollection: (collection) => dispatch(updateCollection(collection))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
