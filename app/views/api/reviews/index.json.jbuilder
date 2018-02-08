json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :created_at
      json.game_id review.game_id
      json.user_id review.user_id
    end
  end
end
@reviews.each do |review|
  json.users do
    json.set! review.user_id do
      json.extract! review.user, :username, :id
      json.collections review.user.collections.pluck(:id)
      json.reviews review.user.reviews.pluck(:id)
      json.reviewedGames review.user.reviewed_games.pluck(:id)

    end
  end
  json.games do
    json.set! review.game.id do
      json.extract! review.game, :id, :title, :image_url, :description, :amazon_url, :rating, :release_date, :average_score
      json.developer review.game.developer.name
      json.platforms review.game.platforms.pluck(:abreviation)
      json.review review.game.reviews.where(user_id: current_user.id)
      json.reviews review.game.reviews.pluck(:id)
      json.genres review.game.genres.pluck(:name)
    end

  end
end
