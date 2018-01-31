# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

want_to_read = Collection.create(name: "Want to Play", user_id: 1)
want_to_read = Collection.create(name: "Have Played", user_id: 1)
want_to_read = Collection.create(name: "Playing", user_id: 1)
want_to_read = Collection.create(name: "My Favorites", user_id: 1)

CollectionGame.create(game_id: overwatch.id, collection_id: 1)
CollectionGame.create(game_id: overwatch.id, collection_id: 2)
CollectionGame.create(game_id: overwatch.id, collection_id: 3)
CollectionGame.create(game_id: overwatch.id, collection_id: 4)

# 'Blizzard Entertainment	Blizzard Entertainment	PC PlayStation 4 Xbox One	General-Action-Shooter First-Person Tactical	T'
