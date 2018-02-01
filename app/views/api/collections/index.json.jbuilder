json.collections do
  @collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :name
      json.games collection.games.pluck(:id)
    end
  end
end

json.games do
  @collections.each do |collection|
    collection.games.each do |game|
      json.set! game.id, game
    end
  end
end
