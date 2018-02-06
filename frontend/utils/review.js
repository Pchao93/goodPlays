export const getReview = (gameId, reviewId) => (
  $.ajax({
    url: `api/games/${gameId}/reviews/${reviewId}`,
    method: 'GET',
  })
);

export const getReviews = (gameId) => (
  $.ajax({
    url: `api/games/${gameId}/reviews`,
    method: 'GET',
  })
);

export const postReview = (gameId, review) => (
  $.ajax({
    url: `api/games/${gameId}/reviews`,
    method: 'POST',
    data: {review},
  })
);

export const patchReview = (gameId, review) => (
  $.ajax({
    url: `api/games/${gameId}/reviews/${review.id}`,
    method: 'PATCH',
    data: {review},
  })
);

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'DELETE',
  })
);
