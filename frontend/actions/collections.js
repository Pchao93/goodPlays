import {
  getCollection,
  getCollections,
  postCollection,
  patchCollection,
  deleteCollection,
  createGameCollection,
  destroyGameCollection

} from '../utils/collection_utils';

export const RECEIVE_ONE_COLLECTION = "RECEIVE_ONE_COLLECTION";
export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const REMOVE_COLLECTION = "REMOVE_COLLECTION";
export const RECEIVE_COLLECTION_ERRORS = "RECEIVE_COLLECTION_ERRORS";
export const CLEAR_COLLECTION_ERRORS = "CLEAR_COLLECTION_ERRORS";
export const ADD_GAME_COLLECTION = "ADD_GAME_COLLECTION";
export const REMOVE_GAME_COLLECTION = "REMOVE_GAME_COLLECTION";

export const receiveOneCollection = jsonObj => ({
  type: RECEIVE_ONE_COLLECTION,
  collection: jsonObj.collection,
  games: jsonObj.games,
  user: jsonObj.user,
  reviews: jsonObj.reviews

});

export const receiveCollections = jsonObj => ({
  type: RECEIVE_COLLECTIONS,
  collections: jsonObj.collections,
  games: jsonObj.games,
  users: jsonObj.users,
  reviews: jsonObj.reviews

});

export const removeCollection = collection => ({
  type: REMOVE_COLLECTION,
  collection: collection.collection
});

export const receiveCollectionErrors = errors => ({
  type: RECEIVE_COLLECTION_ERRORS,
  errors
});

export const clearCollectionErrors = () => ({
  type: CLEAR_COLLECTION_ERRORS
});

export const addGameToCollection = (gameId, collectionId, addGameToCollectionId, removeGameFromCollectionId) => ({
  type: ADD_GAME_COLLECTION,
  gameId,
  collectionId,
  addGameToCollectionId,
  removeGameFromCollectionId
});

export const removeGameFromCollection = (gameId, collectionId, addGameToCollectionId, removeGameFromCollectionId, removeGamesFromCollectionArray, removeReviewId) => ({
  type: REMOVE_GAME_COLLECTION,
  gameId,
  collectionId,
  addGameToCollectionId,
  removeGameFromCollectionId,
  removeGamesFromCollectionArray,
  removeReviewId,
});

export const getOneCollection = collectionId => dispatch => getCollection(collectionId)
  .then(collection => dispatch(receiveOneCollection(collection)),
    errors => dispatch(receiveCollectionErrors(errors)));

export const getAllCollections = (userId) => dispatch => getCollections(userId)
  .then(collections => dispatch(receiveCollections(collections)),
    errors => dispatch(receiveCollectionErrors(errors)));

export const createCollection = (formCollection) => dispatch => postCollection(formCollection)
  .then(collection => dispatch(receiveOneCollection(collection)),
    errors => dispatch(receiveCollectionErrors(errors)));

export const updateCollection = (formCollection) => dispatch => patchCollection(formCollection)
  .then(collection => dispatch(receiveOneCollection(collection)),
    errors => dispatch(receiveCollectionErrors(errors)));

export const destroyCollection = (collectionId) => dispatch => deleteCollection(collectionId)
  .then(collection => dispatch(removeCollection(collection)), errors =>
    dispatch(receiveCollectionErrors(errors)));

export const addGameCollection = (gameId, collectionId) => dispatch => createGameCollection({gameId, collectionId})
  .then(({ addGameToCollectionId, removeGameFromCollectionId }) => dispatch(
    addGameToCollection(gameId, collectionId, addGameToCollectionId, removeGameFromCollectionId)),
      errors => dispatch(receiveCollectionErrors));

export const removeGameCollection = (gameId, collectionId) => dispatch => destroyGameCollection({gameId, collectionId})
  .then(({ addGameToCollectionId, removeGameFromCollectionId, removeGamesFromCollectionArray, removeReviewId }) => dispatch(
    removeGameFromCollection(gameId, collectionId, addGameToCollectionId, removeGameFromCollectionId, removeGamesFromCollectionArray, removeReviewId)),
    errors => dispatch(receiveCollectionErrors));
