json.collections do
  @collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :name, :user_id
      json.games collection.games.pluck(:id)
    end
  end
end
@collections.each do |collection|
  collection.games.each do |game|
    json.games do
      json.set! game.id do
        json.extract! game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date, :average_score
        json.developer game.developer.name
        json.platforms game.platforms.pluck(:abreviation)
        # json.review game.reviews.where(user_id: current_user.id)
        json.reviews game.reviews.pluck(:id)
        json.genres game.genres.pluck(:name)


      end
    end
  end
end

@user_reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :user_id, :game_id, :rating, :body, :created_at
    end
  end
end

json.users do
  json.set! current_user.id do
    json.extract! current_user, :username, :id
    json.collections current_user.collections.pluck(:id)
    json.reviews current_user.reviews.pluck(:id)
    json.games current_user.games.pluck(:id)
  end
end
