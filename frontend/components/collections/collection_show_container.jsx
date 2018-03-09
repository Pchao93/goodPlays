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
import {fetchUserGames} from '../../actions/games';
import GameIndex from '../games/game_index.jsx';

const mapStateToProps = (state, ownProps) => {
  let collection = state.entities.collections[ownProps.match.params.collectionId];
  let currentUser = state.session.currentUser;
  let games = [];
  let headerText;
  let collectionUser;
  let edit = false;
  let reviews;
  if (collection) {
    if (ownProps.match.path === '/collections/:collectionId/edit' &&
      collection.user_id === currentUser.id ) {
        edit = true;
    }
    games = collection.games.map(gameIndex => {
      return state.entities.games[gameIndex];
    }).sort((a, b) => a.id - b.id);

    // if (state.entities.reviews) {
      reviews = Object.values(state.entities.reviews).filter(review => collection.games.includes(review.game_id));
    // }
    if (currentUser && collection.user_id === currentUser.id) {
      collectionUser = {username: "My Games", id: currentUser.id};
    } else {
      collectionUser = state.entities.users[collection.user_id];
    }
  } else {
    if (ownProps.location.pathname === '/collections/my-games') {
      // if (currentUser) {

        let user = state.entities.users[currentUser.id];
        if (user) {
          reviews = Object.values(state.entities.reviews).filter(review => user.games.includes(review.game_id));

          user.collections.forEach((collectionId, idx) => {
            let blockCollection = state.entities.collections[collectionId];
            if (blockCollection) {
              if (["Want to Play", "Have Played", "Playing"].includes(blockCollection.name)) {
                blockCollection.games.forEach(gameIdx => games.push(state.entities.games[gameIdx]));
              }
            }
          });
        }
      // }

      collectionUser = {username: 'My Games', id: currentUser.id};
      collection = {name: ''};

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
    reviews
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: (userId) => ownProps.location.pathname === '/collections/my-games' ? dispatch(fetchUserGames(userId)) : dispatch(getOneCollection(ownProps.match.params.collectionId)),
  destroyCollection: (collectionId) => dispatch(destroyCollection(collectionId)),
  updateCollection: (collection) => dispatch(updateCollection(collection))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
