export const getCollection = collectionId => (
  $.ajax({
    url: `api/collections/${collectionId}`,
    method: 'GET',
  })
);

export const getCollections = (userId) => {
  
  let url = userId ? `api/users/${userId}/collections` : `api/users/${userId}/collections`;
  return $.ajax({
    url: `api/users/${userId}/collections`,
    method: 'GET',
  });
};

export const postCollection = (collection) => (
  $.ajax({
    url: 'api/collections',
    method: 'POST',
    data: {collection},
  })
);

export const patchCollection = (collection) => (
  $.ajax({
    url: `api/collections/${collection.id}`,
    method: 'PATCH',
    data: {collection},
  })
);

export const deleteCollection = (collectionId) => (
  $.ajax({
    url: `api/collections/${collectionId}`,
    method: 'DELETE',
  })
);

export const createGameCollection = ({ gameId, collectionId}) => (
  $.ajax({
    url: `/api/collection_games`,
    method: 'POST',
    data: { collection_game: {collection_id: collectionId, game_id: gameId} }
  })
);

export const destroyGameCollection = ({ gameId, collectionId}) => (
  $.ajax({
    url: `/api/collection_games/`,
    method: 'DELETE',
    data: { collection_game: {collection_id: collectionId, game_id: gameId} }
  })
);
