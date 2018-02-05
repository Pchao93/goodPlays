class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :game_id
    add_index :reviews, [:user_id, :game_id]


  end
end
