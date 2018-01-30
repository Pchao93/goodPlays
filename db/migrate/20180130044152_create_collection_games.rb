class CreateCollectionGames < ActiveRecord::Migration[5.1]
  def change
    create_table :collection_games do |t|
      t.integer :collection_id, null: false
      t.integer :game_id, null: false
      t.timestamps
    end
  end
end
