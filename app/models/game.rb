class Game < ApplicationRecord
  validates :title, :description, :release_date, :image_url, :amazon_url, presence: true
  validates :title, uniqueness: true

  belongs_to :developer


  has_many :platform_games
  has_many :platforms,
    through: :platform_games


  has_many :collection_games

  has_many :collections,
    through: :collection_games

  has_many :users,
    through: :collections,
    source: :user

  has_many :reviews,
    dependent: :destroy

  has_many :reviewers,
    through: :reviews,
    source: :user

  def average_score
    if self.reviews.count < 1
      return 0.0
    end
    total = self.reviews.reduce(0) do |sum, review|
      sum + review.rating
    end
    p total
    p self.reviews.count
    average = ((total * 1.0)/ self.reviews.count)
    average.round(1)
  end

end
