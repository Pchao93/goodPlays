json.games do
  json.set! @game.id do
    json.extract! @game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating, :average_score
    json.developer @game.developer.name
    json.platforms @game.platforms.pluck(:abreviation)
    json.reviews @game.reviews.pluck(:id)
    json.genres @game.genres.pluck(:name)
    json.review @game.reviews.where(user_id: current_user.id)

  end
end

if @reviews
  @reviews.each do |review|
    json.reviews do
      json.set! review.id do
        json.extract! review, :id, :rating, :body, :game_id, :user_id, :created_at
      end
    end
    json.users do
      json.set! review.user.id do
        json.extract! review.user, :id, :username
        json.games review.user.games.pluck(:id) if current_user && review.user.id == current_user.id
        json.collections review.user.collections.pluck(:id) if current_user && review.user.id == current_user.id
        json.reviews review.user.reviews.pluck(:id) if current_user && review.user.id == current_user.id
      end
    end
  end
end
