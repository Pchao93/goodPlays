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
  json.set! @user.id do
    json.extract! @user, :username, :id
    json.collections @user.collections.pluck(:id)
    json.reviews @user.reviews.pluck(:id)
    json.games @user.games.pluck(:id)
  end
end
