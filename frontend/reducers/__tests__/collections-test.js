import CollectionsReducer from "../collections";
import * as CollectionActions from "../../actions/collections";
import { testCollections, testCollection } from "../../testUtils/collection_helper";


describe("CollectionsReducer", () =>{
  test("should return the initial state", () =>{
    expect(CollectionsReducer(undefined, {})).toEqual({});
  });

  test("should handle RECEIVE_GAMES", () => {
    expect(CollectionsReducer(undefined, {
      type: CollectionActions.RECEIVE_COLLECTIONS,
      collections: testCollections
    })).toEqual(
      testCollections
    );
  });
  //
  test("should handle RECEIVE_ONE_GAME", () => {
    expect(CollectionsReducer(undefined, {
      type: CollectionActions.RECEIVE_ONE_COLLECTION,
      collection: testCollection.collection,
      users: testCollection.users,
      reviews: testCollection.reviews
    })[417]).toEqual(testCollection.collection);
  });

  }
);
