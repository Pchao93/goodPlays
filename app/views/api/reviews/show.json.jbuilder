json.review do
  json.extract! @review, :id, :body, :rating, :created_at
  json.user_id @review.user_id
  json.game_id @review.game_id
end

json.game do
  json.extract! @review.game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating, :average_score
  json.developer @review.game.developer.name
  json.platforms @review.game.platforms.pluck(:abreviation)
  json.review @review
  json.reviews @review.game.reviews.pluck(:id)
  json.genres @review.game.genres.pluck(:name)


end

json.user do

  json.extract! @review.user, :id, :username
  json.collections @review.user.collections.pluck(:id)
  json.reviews @review.user.reviews.pluck(:id)
  json.games @review.user.games.pluck(:id)
end

json.to_add @review.to_add
