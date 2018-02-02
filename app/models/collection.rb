class Collection < ApplicationRecord
  validates :name, presence: true, length: {minimum: 1}
  has_many :collection_games, dependent: :destroy

  has_many :games,
    through: :collection_games

  belongs_to :user
end
