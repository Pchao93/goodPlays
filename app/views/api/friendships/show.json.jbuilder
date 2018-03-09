json.users do
  json.set! @user1.id do
    json.extract! @user1, :id, :username, :image_url, :friends, :summary, :description
  end
  json.set! @user2.id do
    json.extract! @user2, :id, :username, :image_url, :friends, :summary, :description
  end
end
json.currentUser current_user.id
