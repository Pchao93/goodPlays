json.extract! @game, :id, :title, :description, :image_url, :amazon_url, :release_date, :rating
json.developer @game.developer.name
json.platforms @game.platforms.pluck(:abreviation)
