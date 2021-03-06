json.collection do
  json.extract! @collection, :id, :name, :user_id
  json.games @collection.games.pluck(:id)
  json.count @collection.games.count

end


if @collection_games
  @collection_games.each do |game|
    json.games do
      json.set! game.id do
        json.extract! game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date, :average_score
        json.developer game.developer.name
        json.platforms game.platforms.pluck(:abreviation)
        json.reviews game.reviews.pluck(:id)
        json.genres game.genres.pluck(:name)

      end
    end
  end
end

if @user_reviews
  @user_reviews.each do |review|
    json.reviews do

      json.set! review.id do
        json.extract! review, :id, :user_id, :game_id, :rating, :body
      end

    end
  end
end

json.user do
  # json.set! @collection.user_id do
    json.extract! @collection.user, :id, :username, :image_url, :friends
    json.collections @collection.user.collections.pluck(:id)
    json.reviews @collection.user.reviews.pluck(:id)
    json.games @collection.user.games.pluck(:id)

  # end
end
