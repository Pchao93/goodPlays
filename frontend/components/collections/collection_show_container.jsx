import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import React from 'react';
import {
  getAllGames,
  getAllCollections,
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
    if (ownProps.location.pathname === '/collections/all') {
      // if (currentUser)
      let user = state.entities.users[currentUser.id];
      if (state.entities.users[currentUser.id]) {
        user.collections.forEach((collectionId, idx) => {
          let blockCollection = state.entities.collections[collectionId];
          if (blockCollection) {
            if (idx < 3) {
              blockCollection.games.forEach(gameIdx => games.push(state.entities.games[gameIdx]));
            }
          }
        });
      }

      collection = {name: 'All Games'};
      collectionUser = currentUser;
    } else {
      collection = {name: ""};
    }
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
  action: () => ownProps.location.pathname === '/collections/all' ? dispatch(getAllCollections()) : dispatch(getOneCollection(ownProps.match.params.collectionId)),
  destroyCollection: (collectionId) => dispatch(destroyCollection(collectionId)),
  updateCollection: (collection) => dispatch(updateCollection(collection))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
