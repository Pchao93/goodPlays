# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username
json.collections @user.collections.pluck(:id)
json.reviews @user.reviews.pluck(:id)
json.reviewedGames @user.reviewed_games.pluck(:id)
