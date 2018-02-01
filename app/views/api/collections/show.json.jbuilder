json.collection do
  json.extract! @collection, :id, :name
  json.games @collection.games.pluck(:id)
end
json.games @collection.games.each do |game|
  json.set! game.id, game
end
