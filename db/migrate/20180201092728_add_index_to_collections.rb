class AddIndexToCollections < ActiveRecord::Migration[5.1]
  def change
    add_index :collections, [:name, :user_id], unique: true
  end
end
