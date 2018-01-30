class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.date :release_date, null: false
      t.integer :developer_id, null: false
      t.string :image_url, null: false
      t.text :description, null: false
      t.string :amazon_url, null: false
      t.timestamps
    end

    add_index :games, :title, unique: true
    add_index :games, :developer_id
  end
end
