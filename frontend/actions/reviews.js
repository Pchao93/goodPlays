import {
  getReviews,
  postReview,
  patchReview,
  deleteReview,

} from '../utils/review';

export const RECEIVE_ONE_REVIEW = "RECEIVE_ONE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveOneReview = jsonObj => ({
  type: RECEIVE_ONE_REVIEW,
  review: jsonObj.review,
  games: jsonObj.games,
  user: jsonObj.user,
});

const receiveReviews = jsonObj => ({
  type: RECEIVE_REVIEWS,
  reviews: jsonObj.reviews,
  games: jsonObj.games,
  users: jsonObj.users,

});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review: review.review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const getAllReviews = (gameId) => dispatch => getReviews(gameId)
  .then(reviews => dispatch(receiveReviews(reviews)),
    errors => dispatch(receiveReviewErrors(errors)));

export const createReview = (gameId, formReview) => dispatch => postReview(gameId, formReview)
  .then(review => dispatch(receiveOneReview(review)),
    errors => dispatch(receiveReviewErrors(errors)));

export const updateReview = (gameId, formReview) => dispatch => patchReview(gameId, formReview)
  .then(review => dispatch(receiveOneReview(review)),
    errors => dispatch(receiveReviewErrors(errors)));

export const destroyReview = (reviewId) => dispatch => deleteReview(reviewId)
  .then(review => dispatch(removeReview(review)), errors =>
    dispatch(receiveReviewErrors(errors)));
