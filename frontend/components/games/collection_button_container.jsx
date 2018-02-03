import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CollectionButton from './collection_button';
import {removeGameCollection, addGameCollection, createCollection } from '../../actions/collections';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let collections;

  if (currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
    collections = [];
    Object.values(state.entities.collections)
      .forEach(collectionListItem => collectionListItem.user_id === currentUser.id);

  }
  let edit = ownProps.match.path ===
    '/collections/:collectionId/edit' &&
      state.entities.collections[ownProps.match.params.collectionId].user_id ===
        currentUser.id;
  let collectionId = ownProps.match.params.collectionId;
  // let collection = state.entities.collections[collectionId];
  return {
    game: ownProps.game,
    edit,
    collections,
    collectionId,
    currentUser,
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
  });

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionButton));
