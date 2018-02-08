class AddCountToCollections < ActiveRecord::Migration[5.1]
  def change
    add_column :collections, :count, :integer
  end
end
