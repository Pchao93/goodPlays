class Review < ApplicationRecord
  validates :game_id, uniqueness: { scope: :user_id }
  validates :body, :rating, presence: true
  validates :rating, inclusion: {in: 1..5 }

  belongs_to :user
  belongs_to :game
end
