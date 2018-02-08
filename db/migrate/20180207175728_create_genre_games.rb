class CreateGenreGames < ActiveRecord::Migration[5.1]
  def change
    create_table :genre_games do |t|
      t.integer :genre_id
      t.integer :game_id
      t.timestamps
    end

    add_index :genre_games, :genre_id
    add_index :genre_games, :game_id
    add_index :genre_games, [:game_id, :genre_id], unique: true

  end
end
