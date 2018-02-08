class Game < ApplicationRecord
  validates :title, :description, :release_date, :image_url, :amazon_url, presence: true
  validates :title, uniqueness: true


  belongs_to :developer


  has_many :platform_games
  has_many :platforms,
    through: :platform_games


  has_many :collection_games

  has_many :collections,
    through: :collection_games

  has_many :users,
    through: :collections,
    source: :user

  has_many :reviews,
    dependent: :destroy

  has_many :reviewers,
    through: :reviews,
    source: :user

  has_many :genre_games

  has_many :genres,
    through: :genre_games


  def calculate_relation(game)
    dif_genres = (self.genres - game.genres).length
    dif_genres / 2


  end

end
