class ChangeColumnsForReviews < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :title, :string
    add_column :reviews, :rating, :integer

  end
end
