class Collection < ApplicationRecord
  validates :name, presence: true, length: {minimum: 1}
  has_many :collection_games, dependent: :destroy
  before_create :handle_create

  def handle_create
    self.count = 0
  end

  has_many :games,
    through: :collection_games

  belongs_to :user,
  touch: true
end
