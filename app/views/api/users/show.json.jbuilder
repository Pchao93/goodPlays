# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :image_url, :friends
json.collections @user.collections.pluck(:id)
json.reviews @user.reviews.pluck(:id)
json.games @user.games.pluck(:id)
