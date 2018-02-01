class AddIndicesToCollectionGames < ActiveRecord::Migration[5.1]
  def change
    add_index :collection_games, :collection_id
    add_index :collection_games, :game_id
    add_index :collection_games, [:game_id, :collection_id], unique: true
  end
end
