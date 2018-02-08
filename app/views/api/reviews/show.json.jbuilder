json.review do
  json.extract! @review, :id, :body, :rating, :created_at
  json.user_id @review.user_id
  json.game_id @review.game_id
end

json.game do
  
end

json.user do

  json.extract! @review.user, :id, :username
  json.collections @review.user.collections.pluck(:id)
  json.reviews @review.user.reviews.pluck(:id)
  json.games @review.user.games.pluck(:id)
end

json.to_add @review.to_add
