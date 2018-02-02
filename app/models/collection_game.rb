class CollectionGame < ApplicationRecord
  validates :game_id, uniqueness: { scope: :collection_id }
  
  belongs_to :collection

  belongs_to :game

  has_one :user,
    through: :game
end
