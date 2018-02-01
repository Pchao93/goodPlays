

export const createCollectionGame = ({ gameId, collectionId}) => (
  $.ajax({
    url: `/api/collection_games`,
    method: 'POST',
    data: { collection_game: {collectionId, gameId} }
  })
);

export const deleteCollectionGame = ({collectionGameId}) => (
  $.ajax({
    url: `/api/collection_games/`,
    method: 'DELETE',
  })
);
