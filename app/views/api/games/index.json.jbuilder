@games.each do|game|

  json.set! game.id do
    json.extract! game, :id, :title, :description, :image_url, :amazon_url, :release_date, :developer, :platforms
  end

end
