import ReviewsReducer from "../reviews";
import * as ReviewActions from "../../actions/reviews";
import { testReviews, testReview } from "../../testUtils/review_helper";


describe("ReviewsReducer", () =>{
  test("should return the initial state", () =>{
    expect(ReviewsReducer(undefined, {})).toEqual({});
  });

  test("should handle RECEIVE_GAMES", () => {
    expect(ReviewsReducer(undefined, {
      type: ReviewActions.RECEIVE_REVIEWS,
      reviews: testReviews
    })).toEqual(
      testReviews
    );
  });
  //
  test("should handle RECEIVE_ONE_GAME", () => {
    expect(ReviewsReducer(undefined, {
      type: ReviewActions.RECEIVE_ONE_REVIEW,
      review: testReview.review[313],
    })).toEqual(testReview.review);
  });

  }
);
