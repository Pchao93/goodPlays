class AddScoresToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :num_reviews, :integer
    add_column :games, :average_score, :float
  end
end
