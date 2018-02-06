json.games do
  json.set! @game.id do
    json.extract! @game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating
    json.developer @game.developer.name
    json.platforms @game.platforms.pluck(:abreviation)
  end
end

json.reviews do
  @game.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :game_id, :user_id
    end
  end
end
