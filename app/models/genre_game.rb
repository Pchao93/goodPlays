class GenreGame < ApplicationRecord
  validates :game_id, uniqueness: { scope: :genre_id }

  belongs_to :genre
  belongs_to :game
end
