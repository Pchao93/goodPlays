

export const getGames = query => (
  $.ajax({
    url: '/games/search',
    method: 'GET',
    data: { query }
  })
);
