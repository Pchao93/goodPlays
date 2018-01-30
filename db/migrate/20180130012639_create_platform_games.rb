class CreatePlatformGames < ActiveRecord::Migration[5.1]
  def change
    create_table :platform_games do |t|
      t.integer :game_id, null: false
      t.integer :platform_id, null: false
      t.timestamps
    end

    add_index :platform_games, :game_id
    add_index :platform_games, :platform_id
    add_index :platform_games, [:game_id, :platform_id]
  end
end
