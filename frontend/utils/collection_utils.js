export const getCollection = collectionId => (
  $.ajax({
    url: `api/collections/${collectionId}`,
    method: 'GET',
  })
);

export const getCollections = (userId) => (
  $.ajax({
    url: `api/collections`,
    method: 'GET',
  })
);

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
