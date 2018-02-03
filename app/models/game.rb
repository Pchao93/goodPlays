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


end
