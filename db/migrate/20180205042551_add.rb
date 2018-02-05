class Add < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :email, :string, null: false
    add_index :users, :email, unique: true
  end
end
