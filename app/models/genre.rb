class Genre < ApplicationRecord
  validates :name, presence: true

  has_many :genre_games

  has_many :games,
    through: :genre_games
end
