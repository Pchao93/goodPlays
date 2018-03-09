class AddImageUrltoUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image_url, :text
  end
end
