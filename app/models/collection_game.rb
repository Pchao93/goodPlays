class CollectionGame < ApplicationRecord
  validates :game_id, uniqueness: { scope: :collection_id }
  before_save :handle_save
  before_destroy :handle_destroy
  belongs_to :collection

  attr_accessor :to_add, :to_remove, :to_remove_array
  attr_accessor :default_game_collection
  belongs_to :game

  has_one :user,
    through: :game

  def handle_save
    if self.valid?
      user = self.collection.user
      default_collections = user.collections.includes(:games).limit(3)
      default_collections.each do |collection|
        if collection.id == self.collection_id
          next
        else
          collection.games.each do |game|
            if game.id == self.game_id
              self.default_game_collection = CollectionGame.find_by(
                game_id: game.id,
                collection_id: collection.id)
            end
          end
        end
      end
      if self.default_game_collection
        if default_collections.pluck(:id).include?(self.collection_id)
          default_game_collection.destroy
          self.to_remove = default_game_collection.collection_id
        end
      elsif !default_collections.pluck(:id).include?(self.collection_id)
        CollectionGame.create!(
          collection_id: default_collections[1].id,
          game_id: self.game_id)
        self.to_add = default_collections[1].id
      end
    end
  end

  def handle_destroy
    self.to_remove_array = []
    user = self.collection.user
    default_collections = user.collections.includes(:games).limit(3)
    if default_collections.include?(self.collection)
      user.collections.each do |collection|
        p 'looping through collections'
        if collection.id != self.collection_id && collection.games.include?(self.game)
          p "I happen"
          p collection.id.nil?
          CollectionGame.find_by(
            collection_id: collection.id,
            game_id: self.game.id).destroy

          self.to_remove_array.push(collection.id)
        end
      end
    end
  end

end
