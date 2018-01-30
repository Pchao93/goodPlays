class CreateDevelopers < ActiveRecord::Migration[5.1]
  def change
    create_table :developers do |t|
      t.string :name, null: false
      t.timestamps
    end

    add_index :developers, :name, unique: true
  end
end
