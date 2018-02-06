class CollectionGame < ApplicationRecord
  validates :game_id, uniqueness: { scope: :collection_id }
  before_save :handle_save
  before_destroy :handle_destroy
  belongs_to :collection

  attr_accessor :to_add, :to_remove, :to_remove_array
  attr_accessor :default_game_collection, :removeReviewId
  belongs_to :game

  has_one :user,
    through: :game

  # Every game a user collects must be included in one of the three
  # default collections. Games can also only be in one default collection
  # at any given point in time.

  def handle_save
    if self.valid?
      user = self.collection.user
      # user.default_collections = user.collections.includes(:games).limit(3)
      # Search default collections for the game
      user.default_collections.each do |collection|
        if collection.id == self.collection_id
          next
        else
          collection.games.each do |game|
            if game.id == self.game_id
              self.default_game_collection = CollectionGame.find_by(
                game_id: game.id,
                collection_id: collection.id)
              break
            end
          end
        end
      end
      # If the game is found in the defaults, and the target collection
      # is also default, destroy the previous association.
      if self.default_game_collection
        if user.default_collections.pluck(:id).include?(self.collection_id)
          default_game_collection.destroy
          self.to_remove = default_game_collection.collection_id
        end
      #If the game is not yet in the defaults, and the target collection
      #is not a default, create a new association in the defaults
    elsif !user.default_collections.pluck(:id).include?(self.collection_id)
        CollectionGame.create!(
          collection_id: user.default_collections[1].id,
          game_id: self.game_id)
        self.to_add = user.default_collections[1].id
      end
    end
  end

  #If a game is removed from a default collection, it is then removed from
  #Each and every one of the user's collections.

  def handle_destroy
    self.to_remove_array = []
    user = self.collection.user
    # user.default_collections = user.collections.includes(:games).limit(3)
    #Check if the target collection is in the user's defaults
    if user.default_collections.include?(self.collection)
      user.collections.each do |collection|
        if collection.id != self.collection_id &&
          collection.games.include?(self.game)
          CollectionGame.find_by(
            collection_id: collection.id,
            game_id: self.game.id).destroy
          self.to_remove_array.push(collection.id)
          break
        end
      end
      review = Review.find_by(user_id: user.id, game_id: self.game.id)
      if review
        p 'review found'
        review.destroy
        self.removeReviewId = review.id
      end
    end
  end

end
