import CollectionErrorsReducer from "../collections_errors";
import * as CollectionActions from "../../actions/collections";

describe("CollectionErrorsReducer", () =>{
  test("should return the initial state", () =>{
    expect(CollectionErrorsReducer(undefined, {})).toEqual([]);
  });

  test("should handle RECEIVE_COLLECTION_ERRORS", () => {
    expect(CollectionErrorsReducer(undefined, {
      type: CollectionActions.RECEIVE_COLLECTION_ERRORS,
      errors: { responseJSON: ["error"] }
    })).toEqual(
      ["error"]
    );
  });
  //
  test("should handle CLEAR_COLLECTION_ERRORS", () => {
    expect(CollectionErrorsReducer(["error"], {
      type: CollectionActions.CLEAR_COLLECTION_ERRORS,
    })).toEqual([]);
  });

  }
);
