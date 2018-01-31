class AddReleaseDateToGames < ActiveRecord::Migration[5.1]
  def change

    add_column(:games, :release_date, :string, null: false)
    add_column(:games, :rating, :string, null: false)
  end
end
