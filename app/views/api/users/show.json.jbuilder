# json.partial! "api/users/user", user: @user


json.users do
  json.extract! @user, :id, :username, :image_url, :friends
  json.collections @user.collections.pluck(:id)
  json.reviews @user.reviews.pluck(:id)
  json.games @user.games.pluck(:id)
end

@user.reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :created_at
      json.game_id review.game_id
      json.user_id review.user_id
    end
  end
end
