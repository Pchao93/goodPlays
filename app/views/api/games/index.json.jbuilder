reviews = {}

json.games do

  @games.each do |game|

    json.set! game.id do
      json.extract! game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating
      json.developer game.developer.name
      json.platforms game.platforms.pluck(:abreviation)
      json.reviews game.reviews.pluck(:id)
      user_review = current_user.reviews.where(game_id: game.id).first if current_user
      if user_review
        json.review user_review.id
        reviews[user_review.id] = user_review
      end
    end
  end
end

json.reviews reviews
