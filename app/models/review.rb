class Review < ApplicationRecord
  validates :game_id, uniqueness: { scope: :user_id }
  validates :rating, presence: true
  validates :body, length: { minimum: 1, allow_nil: true }
  validates :rating, inclusion: {in: 1..5 }

  belongs_to :user
  belongs_to :game
end
