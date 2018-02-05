json.collections do
  @collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :name, :user_id
      json.games collection.games.pluck(:id)
    end
  end
end
@collections.each do |collection|
  json.users do
    json.set! collection.user_id do
      json.extract! collection.user, :username, :id
      json.collections collection.user.collections.pluck(:id)
      json.reviews collection.user.reviews.pluck(:id)
    end
  end
  json.games do
    collection.games.each do |game|
      json.set! game.id do
        json.extract! game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date
        json.developer game.developer.name
        json.platforms game.platforms.pluck(:abreviation)
      end
    end
  end
end
