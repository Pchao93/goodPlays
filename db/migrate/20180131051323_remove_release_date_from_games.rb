class RemoveReleaseDateFromGames < ActiveRecord::Migration[5.1]
  def change
    remove_column :games, :release_date, :date
  end
end
