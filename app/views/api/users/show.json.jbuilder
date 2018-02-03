# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username
json.collections @user.collections.pluck(:id)
