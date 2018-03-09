json.set! user.id do
  json.extract! user, :id, :username, :image_url, :friends
end
