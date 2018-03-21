import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../reviews";
import * as ApiUtil from "../../utils/review";

import { testReviews, testReview } from "../../testUtils/review_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("simple action creators", () => {
  test('receiveReviews should create an action to receive reviews', () => {
    expect(actions.receiveReviews(testReviews)).toEqual({
      type: actions.RECEIVE_REVIEWS,
      reviews: testReviews.reviews,
      users: testReviews.users,
    });
  });

  test('receiveOneReview should create an action to receive a review', () => {
    expect(actions.receiveOneReview(testReview)).toEqual({
      type: actions.RECEIVE_ONE_REVIEW,
      review: testReview.review,
      user: testReview.user,
      addGameToCollectionId: testReview.to_add,
      gameId: testReview.review.game_id
    });
  });

  test('removeReview should create an action to remove a review', () => {
    expect(actions.removeReview(testReview)).toEqual({
      type: actions.REMOVE_REVIEW,
      review: testReview.review,
    });
  });

  test('receiveReviewErrors should create an action to receive review errors', () => {
    let errors = "this is bad";
    expect(actions.receiveReviewErrors(errors)).toEqual({
      type: actions.RECEIVE_REVIEW_ERRORS,
      errors
    });
  });

  test('clearReviewErrors should create an action to clear review errors', () => {
    expect(actions.clearReviewErrors(testReview)).toEqual({
      type: actions.CLEAR_REVIEW_ERRORS,
    });
  });
});

describe("async action creators", () => {

  test('getAllReviews creates RECEIVE_REVIEWS after fetching reviews', () => {
    const store = mockStore({ reviews: {} });
    const expectedActions = [
      { type: actions.RECEIVE_REVIEWS, reviews: testReviews.reviews, users: testReviews.users}
    ];
    ApiUtil.getReviews = jest.fn(() => {
      return Promise.resolve(testReviews);
    });
    return store.dispatch(actions.getAllReviews()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('createReview creates RECEIVE_ONE_REVIEW after posting review', () => {
    const store = mockStore({ reviews: {} });
    const expectedActions = [
      { type: actions.RECEIVE_ONE_REVIEW, review: testReview.review, user: testReview.user, addGameToCollectionId: testReview.to_add, gameId: testReview.review.game_id }
    ];
    ApiUtil.postReview = jest.fn(() => {
      return Promise.resolve(testReview);
    });
    return store.dispatch(actions.createReview()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('destroyReview creates REMOVE_REVIEW after deleting review', () => {
    const store = mockStore({ reviews: {} });
    const expectedActions = [
      { type: actions.REMOVE_REVIEW, review: testReview.review, }
    ];
    ApiUtil.deleteReview = jest.fn(() => {
      return Promise.resolve(testReview);
    });
    return store.dispatch(actions.destroyReview()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('updateReview creates RECEIVE_ONE_REVIEW after updating review', () => {
    const store = mockStore({ reviews: {} });
    const expectedActions = [
      { type: actions.RECEIVE_ONE_REVIEW, review: testReview.review, user: testReview.user, addGameToCollectionId: testReview.to_add, gameId: testReview.review.game_id }
    ];
    ApiUtil.patchReview = jest.fn(() => {
      return Promise.resolve(testReview);
    });
    return store.dispatch(actions.updateReview()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
