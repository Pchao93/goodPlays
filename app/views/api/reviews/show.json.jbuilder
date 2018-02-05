json.review do
  json.extract! @review, :id, :body, :rating
  json.user @review.user.id
  json.game @review.game.id
end

json.game do
  json.extract! @review.game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating
  json.developer @review.game.developer.name
  json.platforms @review.game.platforms.pluck(:abreviation)
end

json.user do

  json.extract! @review.user, :id, :username
  json.collections @review.user.collections.pluck(:id)
  json.reviews @review.user.reviews.pluck(:id)
end
