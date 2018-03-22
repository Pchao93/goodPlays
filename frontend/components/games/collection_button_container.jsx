import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CollectionButton from './collection_button';
import { openSessionForm , receiveSessionErrors } from '../../actions/session';


import {removeGameCollection, addGameCollection, createCollection } from '../../actions/collections';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let collections;
  let defaultCollection = undefined;
  if (currentUser) {
    if (state.entities.users[state.session.currentUser.id]) {
      currentUser = state.entities.users[state.session.currentUser.id];
    }
    collections = [];
    Object.values(state.entities.collections)
      .forEach(collectionListItem => {
        if (collectionListItem.user_id === currentUser.id) {
          collections.push(collectionListItem);
          if (!defaultCollection) {
            if (collectionListItem.games.includes(ownProps.game.id)) {
              defaultCollection = collectionListItem;
            }
          }
        }
    });

  }
  let edit = ownProps.match.path ===
    '/collections/:collectionId/edit' &&
      state.entities.collections[ownProps.match.params.collectionId].user_id ===
        currentUser.id;
  let collectionId = ownProps.match.params.collectionId;
  let collection = state.entities.collections[collectionId];
  return {
    game: ownProps.game,
    edit,
    collections,
    collectionId,
    currentUser,
    defaultCollection,
    toggleHover: ownProps.toggleHover,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    addGameCollection: (gameId, collectionId) => (
      dispatch(addGameCollection(gameId, collectionId))),
    removeGameCollection: (gameId, collectionId) => (
      dispatch(removeGameCollection(gameId, collectionId))),
    createCollection: (formCollection) => (
      dispatch(createCollection(formCollection))),
    openSessionForm: () => dispatch(openSessionForm()),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),

  });

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionButton));
