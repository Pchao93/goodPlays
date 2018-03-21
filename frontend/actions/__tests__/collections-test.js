import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../collections";
import * as ApiUtil from "../../utils/collection_utils";

import { testCollections, testCollection } from "../../testUtils/collection_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);




describe("simple action creators", () => {
  test('receiveCollections should create an action to receive collections', () => {
    expect(actions.receiveCollections(testCollections)).toEqual({
      type: actions.RECEIVE_COLLECTIONS,
      collections: testCollections.collections,
      users: testCollections.users,
    });
  });

  test('receiveOneCollection should create an action to receive collection', () => {
    expect(actions.receiveOneCollection(testCollection)).toEqual({
      type: actions.RECEIVE_ONE_COLLECTION,
      collection: testCollection.collection,
      user: testCollection.user,
      games: testCollection.games
    });
  });

  test('removeCollection should create an action to remove collection', () => {
    expect(actions.removeCollection(testCollection)).toEqual({
      type: actions.REMOVE_COLLECTION,
      collection: testCollection.collection,
    });
  });

  test('receiveCollectionErrors should create an action to receive collection errors', () => {
    let errors = "this is bad";
    expect(actions.receiveCollectionErrors(errors)).toEqual({
      type: actions.RECEIVE_COLLECTION_ERRORS,
      errors
    });
  });

  test('clearCollectionErrors should create an action to clear collection errors', () => {
    expect(actions.clearCollectionErrors(testCollection)).toEqual({
      type: actions.CLEAR_COLLECTION_ERRORS,
    });
  });

  test('addGametoCollection should create an action to add a game to a collection', () => {
    expect(actions.addGameToCollection(1, 2, 3, 4)).toEqual({
      type: actions.ADD_GAME_COLLECTION,
      gameId: 1,
      collectionId: 2,
      addGameToCollectionId: 3,
      removeGameFromCollectionId: 4,
    });
  });

  test('removeGameFromCollection', () => {
    expect(actions.removeGameFromCollection(1, 2, 3, 4, [1,2,3], 5)).toEqual({
      type: actions.REMOVE_GAME_COLLECTION,
      gameId: 1,
      collectionId: 2,
      addGameToCollectionId: 3,
      removeGameFromCollectionId: 4,
      removeGamesFromCollectionArray: [1, 2, 3],
      removeReviewId: 5,
    });
  });


});

describe("async action creators", () => {
  test('getAllCollections creates RECEIVE_COLLECTIONS after fetching collections', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      { type: actions.RECEIVE_COLLECTIONS, collections: testCollections.collections, users: testCollections.users}
    ];
    ApiUtil.getCollections = jest.fn(() => {
      return Promise.resolve(testCollections);
    });
    return store.dispatch(actions.getAllCollections()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  test('getOneCollection creates RECEIVE_ONE_COLLECTION after fetching collection', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      { type: actions.RECEIVE_ONE_COLLECTION, collection: testCollection.collection, user: testCollection.user, games: testCollection.games}
    ];
    ApiUtil.getCollection = jest.fn(() => {
      return Promise.resolve(testCollection);
    });
    return store.dispatch(actions.getOneCollection(51)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  test('createCollection creates RECEIVE_ONE_COLLECTION after posting collection', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      { type: actions.RECEIVE_ONE_COLLECTION, collection: testCollection.collection, user: testCollection.user, games: testCollection.games}
    ];
    ApiUtil.postCollection = jest.fn(() => {
      return Promise.resolve(testCollection);
    });
    return store.dispatch(actions.createCollection(51)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  test('destroyCollection creates REMOVE_COLLECTION after deleting collection', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      { type: actions.REMOVE_COLLECTION, collection: testCollection.collection, }
    ];
    ApiUtil.deleteCollection = jest.fn(() => {
      return Promise.resolve(testCollection);
    });
    return store.dispatch(actions.destroyCollection(51)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('updateCollection creates RECEIVE_ONE_COLLECTION after updating collection', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      { type: actions.RECEIVE_ONE_COLLECTION, collection: testCollection.collection, user: testCollection.user, games: testCollection.games }
    ];
    ApiUtil.patchCollection = jest.fn(() => {
      return Promise.resolve(testCollection);
    });
    return store.dispatch(actions.updateCollection(51)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });

  test('removeGameCollection creates REMOVE_GAME_COLLECTION after removing game from collection', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      {
        type: actions.REMOVE_GAME_COLLECTION,
        gameId: 1,
        collectionId: 2,
        addGameToCollectionId: 3,
        removeGameFromCollectionId: 4,
        removeGamesFromCollectionArray: [1, 2, 3],
        removeReviewId: 5,
      }
    ];
    ApiUtil.destroyGameCollection = jest.fn((gameId, collectionId) => {
      return Promise.resolve({
        gameId,
        collectionId,
        addGameToCollectionId: 3,
        removeGameFromCollectionId: 4,
        removeGamesFromCollectionArray: [1, 2, 3],
        removeReviewId: 5,
      });
    });
    return store.dispatch(actions.removeGameCollection(1, 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('addGameCollection creates ADD_GAME_COLLECTION after adding game to collection', () => {
    const store = mockStore({ collections: {} });
    const expectedActions = [
      {
        type: actions.ADD_GAME_COLLECTION,
        gameId: 1,
        collectionId: 2,
        addGameToCollectionId: 3,
        removeGameFromCollectionId: 4,
      }
    ];
    ApiUtil.createGameCollection = jest.fn((gameId, collectionId) => {
      return Promise.resolve({
        gameId,
        collectionId,
        addGameToCollectionId: 3,
        removeGameFromCollectionId: 4,
      });
    });
    return store.dispatch(actions.addGameCollection(1, 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
