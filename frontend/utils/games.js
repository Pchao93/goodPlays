export const getGame = gameId => (
  $.ajax({
    url: `api/games/${gameId}`,
    method: 'GET',
  })
);

export const getGames = (user) => (
  $.ajax({
    url: 'api/games',
    method: 'GET',
  })
);

export const getUserGames = (userId) => {
  return $.ajax({
    url: `api/users/${userId}/games`,
    method: 'GET',
  });
};
