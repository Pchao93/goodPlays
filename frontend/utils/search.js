

export const getGames = query => (
  $.ajax({
    url: '/api/games/search',
    method: 'GET',
    data: { query }
  })
);
