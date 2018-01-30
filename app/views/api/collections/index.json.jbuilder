@collections.each do |collection|
  json.set! collection.id do
    json.extract collection, :id, :name
    json.games collection.games.pluck(:id)
  end

end
