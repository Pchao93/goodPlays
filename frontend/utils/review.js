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

export const postReviews = (gameId, review) => (
  $.ajax({
    url: `api/games/${gameId}/reviews`,
    method: 'POST',
    data: {review},
  })
);

export const patchReviews = (gameId, review) => (
  $.ajax({
    url: `api/games/${gameId}/${review.id}`,
    method: 'PATCH',
    data: {review},
  })
);

export const deleteCollection = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'DELETE',
  })
);
