class Review < ApplicationRecord
  validates :game_id, uniqueness: { scope: :user_id }
  validates :rating, presence: true

  validates :rating, inclusion: {in: 1..5 }
  attr_accessor :to_add
  attr_accessor :old_rating
  belongs_to :user,
  touch: true
  belongs_to :game,
  touch: true
  before_save :handle_save
  before_create :handle_create
  before_destroy :handle_destroy
  after_update :handle_update

  def handle_update
    self.game.updated_at = Time.now
    self.game.save
  end

  def handle_save
    if self.id
      game = self.game
      total_score = game.average_score * game.num_reviews
      game.average_score = ((total_score - self.old_rating + self.rating) / game.num_reviews)
      game.average_score = game.average_score.round(1)
      game.save
    end
  end

  def handle_create
    if self.valid?
      game = self.game
      if game.num_reviews && game.num_reviews != 0
        total_score = game.average_score * game.num_reviews
        game.num_reviews += 1
        game.average_score = ((total_score + (self.rating.to_f)) / game.num_reviews)
        game.average_score = game.average_score.round(1)
      else
        game.num_reviews = 1
        game.average_score = self.rating.to_f
      end
      game.save!
      user = self.user

      if !user.games.include?(self.game)
        CollectionGame.create!(
          collection_id: user.default_collections[1].id,
          game_id: self.game_id)
        self.to_add = user.default_collections[1].id
      end
    end
  end

  def handle_destroy
    game = self.game
    total_score = game.average_score * game.num_reviews
    game.num_reviews -= 1
    game.average_score = ((total_score - self.rating.to_f) / game.num_reviews)
    game.average_score = game.average_score.round(1)
    game.save
  end
end
