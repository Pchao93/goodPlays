@reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :created_at
      json.game_id @game.id
      json.user_id review.user_id
    end
  end
  json.users do
    json.set! review.user_id do
      json.extract! review.user, :username, :id
      json.collections review.user.collections.pluck(:id)
    end
  end
end
