import ReviewErrorsReducer from "../review_errors";
import * as ReviewActions from "../../actions/reviews";

describe("ReviewErrorsReducer", () =>{
  test("should return the initial state", () =>{
    expect(ReviewErrorsReducer(undefined, {})).toEqual([]);
  });

  test("should handle RECEIVE_REVIEW_ERRORS", () => {
    expect(ReviewErrorsReducer(undefined, {
      type: ReviewActions.RECEIVE_REVIEW_ERRORS,
      errors: { responseJSON: ["error"] }
    })).toEqual(
      ["error"]
    );
  });
  //
  test("should handle CLEAR_REVIEW_ERRORS", () => {
    expect(ReviewErrorsReducer(["error"], {
      type: ReviewActions.CLEAR_REVIEW_ERRORS,
    })).toEqual([]);
  });

  }
);
