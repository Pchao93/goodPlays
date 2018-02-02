json.collection do
  json.extract! @collection, :id, :name, :user_id
  json.games @collection.games.pluck(:id)

end
json.games do
  @collection.games.each do |game|
    json.set! game.id do
      json.extract! game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date
      json.developer game.developer.name
      json.platforms game.platforms.pluck(:abreviation)
    end
  end
end

json.user do
  # json.set! @collection.user_id do
    json.extract! @collection.user, :id, :username
    json.collections @collection.user.collections.pluck(:id)
  # end
end
