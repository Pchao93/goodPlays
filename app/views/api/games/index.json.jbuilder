@games.each do |game|

  json.set! game.id do
    json.extract! game, :id, :title, :description, :image_url, :amazon_url, :release_date
    json.developer game.developer.name
    json.platforms game.platforms.pluck(:abreviation)

  end

end
