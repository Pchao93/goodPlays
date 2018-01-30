

export const createCollectionGame = ({ gameId, collectionId}) => (
  $.ajax({
    url: `/api/games/${gameId}`,
    method: 'POST',
    data: { collection_game: {collection_id: collectionId} }
  })
);
