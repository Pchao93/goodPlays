json.collection do
  json.extract! @collection, :id, :name, :user_id
  json.games @collection.games.pluck(:id)

end


@collection.games.each do |game|
  json.games do
    json.set! game.id do
      json.extract! game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date
      json.developer game.developer.name
      json.platforms game.platforms.pluck(:abreviation)
      json.review game.reviews.where(user_id: current_user.id) if current_user
      json.reviews game.reviews.pluck(:id)

    end
  end
  review = game.reviews.where(user_id: current_user.id).first if current_user
  json.reviews do
    if review
      json.set! review.id do
        json.extract! review, :id, :user_id, :game_id, :rating, :body
      end
    end
  end
end

json.user do
  # json.set! @collection.user_id do
    json.extract! @collection.user, :id, :username
    json.collections @collection.user.collections.pluck(:id)
    json.reviews @collection.user.reviews.pluck(:id)
    json.games @collection.user.games.pluck(:id)

  # end
end
