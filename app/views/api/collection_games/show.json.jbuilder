json.gameId @collection_game.game_id
json.collectionId @collection_game.collection_id
json.removeGameFromCollectionId @collection_game.to_remove
json.addGameToCollectionId @collection_game.to_add
json.removeGamesFromCollectionArray @collection_game.to_remove_array

p json
