json.collections do
  @collections.each do |collection|
    json.set! collection.id do
      json.extract! collection, :id, :name, :user_id
      json.games collection.games.pluck(:id)
      json.count collection.games.count
    end
  end
end

json.users do
  json.set! current_user.id do
    json.extract! current_user, :username, :id
    json.collections current_user.collections.pluck(:id)
    json.reviews current_user.reviews.pluck(:id)
    json.games current_user.games.pluck(:id)
  end
end
