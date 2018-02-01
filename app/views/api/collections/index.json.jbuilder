json.collections do
  @collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :name, :user_id
      json.games collection.games.pluck(:id)
    end
  end
end

json.games do
  @collections.each do |collection|
    collection.games.each do |game|
      json.set! game.id do
        json.extract! game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date
        json.developer game.developer.name
        json.platforms game.platforms.pluck(:abreviation)
      end
    end
  end
end
