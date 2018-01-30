class Collection < ApplicationRecord

  has_many :collection_games

  has_many :games,
    through: :collection_games

  belongs_to :user
end
