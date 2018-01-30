json.extract @collection, :id, :name
json.games @collection.games.pluck(:id)
