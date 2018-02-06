class Review < ApplicationRecord
  validates :game_id, uniqueness: { scope: :user_id }
  validates :rating, presence: true
  validates :body, length: { minimum: 1, allow_nil: true }
  validates :rating, inclusion: {in: 1..5 }
  attr_accessor :to_add
  belongs_to :user
  belongs_to :game
  before_save :handle_save

  def handle_save
    user = self.user
    if !user.games.include?(self.game)
      CollectionGame.create!(
        collection_id: user.default_collections[1].id,
        game_id: self.game_id)
      self.to_add = user.default_collections[1].id
    end
  end
end
